<!-- ---
sidebar: auto
--- -->

# Knative Workshop 소개

AWS EKS 환경에 Knative와 Kong API Gateway를 설치하고 
Kubernetes 기반의 Serverless 환경을 구성해봅니다.

## 구성요소

- [EKS: Elastic Kubernetes Service](./eks/README.md)
- [Knative](./knative/README.md)
- [Kong For Kubernetes](./kong/README.md)
- [cert-manager](./cert-manager/README.md)

## TODO

- route53 을 이용하여 와일드카드 도메인에 Knative 서비스를 연결합니다.
- istio ingress gateway 대신 kong api gateway 를 사용하도록 설정합니다.
- cert-manager 를 이용하여 https 인증서를 자동으로 발급받을 수 있도록 합니다.
- knative-service 를 배포하고 접속합니다.
- knative-serving 을 이용하여 private 서비스를 배포하고, 
  kong api gateway 를 이용하여 host / path 기반의 routing 을 구성합니다.
- knative-serving 을 이용하여 배포된 route 에 kong plugin 을 적용할 수 있도록 합니다.

## Cookbook

- github 이벤트로 도커 이미지를 자동으로 생성해보기.
- cronjob 으로 slack 에 daily summary 메시지를 전송하기.

## Docs

- [private services in knative](./knative/vrivate-services.md)

