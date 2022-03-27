# bible_finder_ui_vue

### AWS S3에 배포하기
```
aws s3 sync ./ s3://bible-finder-vue --acl public-read --exclude ".git/*"
```

위 명령어를 이용해 배포 합니다.
