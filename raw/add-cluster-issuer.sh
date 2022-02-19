#!/bin/bash

read -p "Enter email: " EMAIL
read -p "Enter DNS_ZONE: " DNS_ZONE
read -p "Enter ACCESS_KEY_ID: " ACCESS_KEY_ID
read -p "Enter SECRET_ACCESS_KEY: " SECRET_ACCESS_KEY

CLUSTER_ISSUER_SECRET_ACCESS_KEY=$(echo -n $SECRET_ACCESS_KEY | base64) \
	envsubst < acme-route53.secret.yaml | kubectl apply -f -

CLUSTER_ISSUER_EMAIL=$EMAIL \
CLUSTER_ISSUER_DNS_ZONE=$DNS_ZONE \
CLUSTER_ISSUER_ACCESS_KEY_ID=$ACCESS_KEY_ID \
	envsubst < cluster-issuer.yaml | kubectl apply -f -
