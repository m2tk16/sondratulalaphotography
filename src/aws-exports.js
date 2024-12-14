/* eslint-disable */
// WARNING: DO NOT EDIT. This file is automatically generated by AWS Amplify. It will be overwritten.

const awsmobile = {
    "aws_project_region": "us-east-1",
    "aws_cognito_identity_pool_id": "us-east-1:c6518695-bc9e-464c-bb56-e2b49e539b2c",
    "aws_cognito_region": "us-east-1",
    "aws_user_pools_id": "us-east-1_yG2Vtu87r",
    "aws_user_pools_web_client_id": "6tetnf92idcm1vog36bpsen68i",
    "oauth": {
        "domain": "sondratulalaphotogra4567947a-4567947a-dev.auth.us-east-1.amazoncognito.com",
        "scope": [
            "email",
            "openid",
            "profile",
        ],
        "redirectSignIn": "http://localhost:3000/,https://www.sondratulalaphotography.com/",
        "redirectSignOut": "https://www.sondratulalaphotography.com/,http://localhost:3000/",
        "responseType": "code"
    },
    "federationTarget": "COGNITO_USER_POOLS",
    "aws_cognito_username_attributes": [],
    "aws_cognito_social_providers": [],
    "aws_cognito_signup_attributes": [
        "EMAIL"
    ],
    "aws_cognito_mfa_configuration": "OFF",
    "aws_cognito_mfa_types": [
        "SMS"
    ],
    "aws_cognito_password_protection_settings": {
        "passwordPolicyMinLength": 8,
        "passwordPolicyCharacters": []
    },
    "aws_cognito_verification_mechanisms": [
        "EMAIL"
    ],
    "aws_user_files_s3_bucket": "sondratulalaphotogra57ef4c60cea34275803abda3c9f91b7b-dev",
    "aws_user_files_s3_bucket_region": "us-east-1",
    "aws_cloud_logic_custom": [
        {
            "name": "SondraTulalaPhotographyContactAPI",
            "endpoint": "https://nlkcug9ut8.execute-api.us-east-1.amazonaws.com/dev",
            "region": "us-east-1"
        }
    ]
};


export default awsmobile;
