<!-- ---
sidebar: auto
--- -->

# Knative Workshop 소개

AWS EKS 환경에 Knative와 Kong API Gateway를 설치하고 
Kubernetes 기반의 Serverless 환경을 구성해봅니다.


## 구성 요소

- [EKS: Elastic Kubernetes Service](./eks/README.md)
- [Knative](./knative/README.md)
- [Kong For Kubernetes](./kong/README.md)
- [cert-manager](./cert-manager/README.md)


## 진행 항목

- AWS EKS 서비스를 이용하여 kubernetes cluster 를 생성합니다.
- Knative, Istio 와 Kong for Kubernetes 서비스를 설치합니다.
- Istio ingress gateway 대신 Kong API Gateway 를 사용하도록 설정합니다.
- AWS Route53 서비스을 이용하여 와일드카드 도메인에 Knative Serving 서비스를
  연결합니다.
- cert-manager 를 이용하여 https 인증서를 자동으로 발급받을 수 있도록 합니다.
- Knative Serving 을 이용하여 private 서비스를 배포하고, 
  Kong API Gateway 를 이용하여 host / path 기반의 routing 을 구성합니다.
- Knative Serving 을 이용하여 배포된 route 에 Kong Plugin 을 적용할 수 있도록
  합니다.


## Cookbook

- github 이벤트로 도커 이미지를 자동으로 생성해봅니다.
- Slack 에 Daily Summary 메시지를 전송하는 Cronjob Event 를 생성해봅니다.

<!--
## Docs

- [private services in knative](./knative/vrivate-services.md)
-->

