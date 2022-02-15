# Introduction

2022-02-15

1. 공식 사이트의 Quick Start 예제(kind 또는 minikube 를 사용하는)는 정상적으로
   동작하지 않음. kuorier 의 controller 를 설정하는 과정에서 오류가 발생.

2. 현재 버전의 KNative v1.2 설치에는 kubernetes 1.21 버전 이상이 필요하다.
   `eksctl`을 이용하여 EKS 를 생성하고 kubernetes 버전을 업그레이드할 때 시간이
   많이 필요하니까, 처음 생성할 때 1.21 이상으로 생성하자.

---

## 설치 과정 

1. EKS 설치
2. KNative Operator 설치 
3. Knative Serving component 설치 
4. [Istio 설치](./install-istio/README.md)
5. ...
