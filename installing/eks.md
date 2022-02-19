# Installing EKS

`eksctl` 을 이용하여 EKS Cluster 를 생성합니다.

## `eksctl` 설치 

다음 명령으로 `eksctl` 명령줄 유틸리티를 설치합니다. 
[공식 문서](https://docs.aws.amazon.com/ko_kr/eks/latest/userguide/eksctl.html)

```bash
brew tap weaveworks/tap
brew install weaveworks/tap/eksctl
```

## EKS Cluster 생성 


::: tip
Knative 1.2 는 Kubernetes 1.21 이상의 버전을 필요로 하니, `1.21` 이상의
버전으로 EKS Cluster를 생성하세요.
(설치에는 15분 이상 소요됩니다.)
:::

```bash
eksctl create cluster --name CLUSTER_NAME --region ap-northeast-2 --version 1.21
```

