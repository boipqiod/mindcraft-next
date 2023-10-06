#!/bin/bash

# 설정
FOLDER_NAME=".next"
BRANCH_NAME="deploy"

# 현재 브랜치의 변경 사항 임시 저장
git stash

# 브랜치가 이미 존재하는지 확인
git rev-parse --verify $BRANCH_NAME

# 브랜치가 없으면 생성
if [ $? -ne 0 ]; then
  git checkout -b $BRANCH_NAME
else
  git checkout $BRANCH_NAME
fi

# 임시 저장한 변경 사항 적용
git stash apply

# 특정 폴더만 스테이징
git add $FOLDER_NAME/

# 커밋
git commit -m "Deploy commit"

# 푸시
git push -u origin $BRANCH_NAME

# 원래 브랜치로 돌아감 (예: main 브랜치)
git checkout -

# 임시 저장한 변경 사항을 다시 적용
git stash apply
