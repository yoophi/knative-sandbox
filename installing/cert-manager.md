# Installing cert-manager

## cert-manager 설치 

[installation with Helm](https://cert-manager.io/docs/installation/helm/)

<<< @/raw/install-cert-manager.sh

`dns01` 방식으로 인증서를 발행할 수 있도록 `ClusterIssuer`를 생성합니다.
## cluster-issuer 생성

<<< @/raw/cluster-issuer.yaml

<<< @/raw/add-cluster-issuer.sh