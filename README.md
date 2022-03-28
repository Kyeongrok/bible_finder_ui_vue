# bible_finder_ui_vue

<img width="1011" alt="image" src="https://user-images.githubusercontent.com/1642243/160273678-39eea408-9c26-4b55-a3fb-b1980c1cf0f3.png">


### 주소
http://bible-finder-vue.s3-website-ap-northeast-1.amazonaws.com/

### AWS S3에 배포하기
빌드 후 dist와 s3를 동기화 해줍니다.
```
vue-cli-service build
cd dist
aws s3 sync ./ s3://bible-finder-vue --acl public-read --exclude ".git/*"
```

위 명령어를 이용해 배포 합니다.
