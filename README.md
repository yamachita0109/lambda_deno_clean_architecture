# lambda_deno_clean_architecture


## Deploy

```
$ rm index.zip && zip -r index.zip . && aws lambda update-function-code   --function-name DenoFunction --zip-file fileb://index.zip
```