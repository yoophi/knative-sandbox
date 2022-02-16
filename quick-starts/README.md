# Introduction

2022-02-15

1. 공식 사이트의 Quickstarts 예제(kind 또는 minikube 를 사용하는)는 정상적으로
   동작하지 않는 것을 확인했습니다. kourier의 controller를 설정하는 과정에서 오류가 발생하는데, 
   아직 해결방법의 이슈를 확인하지 못했습니다(local 환경에서 테스트하는 방법은
   추가로 테스트해보고 업데이트하겠습니다).

2. 현재 버전의 Knative v1.2 설치에는 kubernetes 1.21 버전 이상이 필요하다.
   `eksctl`을 이용하여 EKS 를 생성하고 kubernetes 버전을 업그레이드할 때 시간이
   많이 필요하니까, 처음 생성할 때 1.21 이상으로 생성하는 것을 권장합니다.

---

## 설치 과정 

1. EKS 설치
2. KNative Operator 설치 
3. Knative Serving component 설치 
4. [Istio 설치](./install-istio/README.md)
5. ...
