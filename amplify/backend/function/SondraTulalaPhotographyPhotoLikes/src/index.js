const AWS = require("aws-sdk");
const jwt = require("jsonwebtoken");
const dynamoDb = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
    console.log("Event: ")
    console.log(event)

  try {
    console.log("Incoming Event:", JSON.stringify(event, null, 2));

    // Extract token from headers or event body
    const authorizationHeader = event.headers?.Authorization;
    console.log(authorizationHeader)
    if (!authorizationHeader) {
      return {
        statusCode: 401,
        body: JSON.stringify({ message: "Unauthorized access. Missing token. Init" }),
      };
    }
    console.log(authorizationHeader)

    /*
    // Testing ----------
    const header = {
        alg: "HS256",
        typ: "JWT",
      };
      
      // Define a secret key (replace with a real key in production)
      const secretKey = "K3aD+GINfQd5/qbwFmHf1sGtuzmoh9izUk5UJSgj8Tg=";
      
      // Generate the JWT token
      const token = jwt.sign(authorizationHeader, secretKey, {
        algorithm: "HS256", // Hashing algorithm
        header: header,     // Optional: Set the header explicitly
      });
      
      console.log("Generated JWT Token:", token);
      console.log("------------------------------")
    */
    

    const username = event.headers.Authorization.username; // Use the "Authorization" header directly
    if (!username) {
    return {
        statusCode: 401,
        body: JSON.stringify({ message: "Unauthorized access. Missing user ID." }),
    };
    }
      /*
    let userClaims;
    try {
      userClaims = jwt.decode(authorizationHeader); // Decodes the JWT without verifying (optional: add signature verification here)
      console.log("00000000000")
      console.log(userClaims);
      console.log("111111111111")
      if (!userClaims || !userClaims.sub) {
        throw new Error("Invalid token. Missing user claims.");
      }
    } catch (err) {
      console.error("Error decoding token:", err);
      return {
        statusCode: 401,
        body: JSON.stringify({ message: "Unauthorized access. Invalid token. Decoding" }),
      };
    }
    */

    //const username = authorizationHeader.username;

    // Parse request body
    const requestBody = JSON.parse(event.body);
    const { photo } = requestBody;

    if (!photo) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: "Photo is required." }),
      };
    }

    // Check if the item exists in the table
    const getParams = {
      TableName: "SondraTulalaPhotography-PhotoLikes",
      Key: {
        username: username,
        photo: photo,
      },
    };

    const existingItem = await dynamoDb.get(getParams).promise();

    let liked;
    if (existingItem.Item) {
      // Toggle the like status if the item exists
      liked = existingItem.Item.liked === "Y" ? "N" : "Y";
    } else {
      // Default to "Y" for a new item
      liked = "Y";
    }

    // Update or insert the item in the table
    const putParams = {
      TableName: "SondraTulalaPhotography-PhotoLikes",
      Item: {
        username: username,
        photo: photo,
        liked: liked,
      },
    };

    await dynamoDb.put(putParams).promise();

    // Query to count the total number of "Y" for the specific photo
    const countParams = {
      TableName: "SondraTulalaPhotography-PhotoLikes",
      IndexName: "photo-index", // Assuming a Global Secondary Index (GSI) on the photo attribute
      KeyConditionExpression: "photo = :photo",
      FilterExpression: "liked = :liked",
      ExpressionAttributeValues: {
        ":photo": photo,
        ":liked": "Y",
      },
    };

    const countResult = await dynamoDb.query(countParams).promise();
    const totalLikes = countResult.Count || 0;

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Amz-Date, X-Api-Key, X-Amz-Security-Token",
        "Access-Control-Allow-Methods": "OPTIONS,POST,GET,ANY",
      },
      body: JSON.stringify({
        message: "Like status updated successfully.",
        liked: liked,
        totalLikes: totalLikes,
      }),
    };
  } catch (error) {
    console.error("Error updating like status:", error);
    return {
      statusCode: 500,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Amz-Date, X-Api-Key, X-Amz-Security-Token",
        "Access-Control-Allow-Methods": "OPTIONS,POST,GET,ANY",
      },
      body: JSON.stringify({
        message: "An error occurred while updating like status.",
        error: error.message,
      }),
    };
  }
};
