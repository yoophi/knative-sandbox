# Installing Knative

::: tip
이 workshop 에서는 Operator를 이용해 Knative를 설치합니다.
:::

## Install Knative Operator

공식 문서의 [Installing using the Operator](https://knative.dev/docs/install/operator/knative-with-operators) 내용을 참고하세요.


### Install the latest Knative Operator release

```sh
kubectl apply -f https://github.com/knative/operator/releases/download/knative-v1.2.0/operator.yaml
```

### 설치 확인 

Knative Operator 는 `default` namespace 에 설치됩니다. 
아래 명령으로 현재 context 의 기본 namespace 를 `default`로 설정합니다.

```sh
kubectl config set-context --current --namespace=default
```

`knative-operator`가 정상 설치되었는지 확인합니다.

```sh
kubectl get deployment knative-operator
```

정상 설치시, 아래와 같이 deployment가 `Ready` status로 출력됩니다.

```text
NAME               READY   UP-TO-DATE   AVAILABLE   AGE
knative-operator   1/1     1            1           19h
```


## Create Knative Serving Custom Resource 

`knative-serving` namespace 및 `KnativeServing` custom resource 를 생성합니다.

```bash
cat < EOF
apiVersion: v1
kind: Namespace
metadata:
  name: knative-serving
---
apiVersion: operator.knative.dev/v1alpha1
kind: KnativeServing
metadata:
  name: knative-serving
  namespace: knative-serving
EOF | kubectl apply -f -
```
