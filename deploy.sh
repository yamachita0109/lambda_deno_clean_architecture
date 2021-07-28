#!/bin/sh
LAYER_S3_BUCKET=
APP_S3_BUCKET=
STACK_NAME=

# CreateLayer
mkdir work
cd work
curl -OL https://github.com/hayd/deno-lambda/releases/download/1.11.0/deno-lambda-layer.zip
aws s3 cp ./deno-lambda-layer.zip s3://$LAYER_S3_BUCKET
cd ..

# AppDeploy
mkdir release
zip -r app.zip . > /dev/null 2>&1
mv app.zip release/

aws cloudformation package --template-file template.yml --s3-bucket $APP_S3_BUCKET --s3-prefix `date '+%Y%m%d%H%M%S'` --output-template-file output.yml
aws cloudformation deploy --region ap-northeast-1 --template-file output.yml --stack-name $STACK_NAME --capabilities CAPABILITY_IAM

# After
rm -fr work
rm -fr release