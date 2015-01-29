#!/bin/sh

KEYSTORE=signing-jar.keystore

keytool -genkey -alias runetranscriberui -keystore $KEYSTORE -storepass runetranscriberui -keypass runetranscriberui -dname "CN=Jeffrey Thompson, OU=RuneTranscriber.org, O=RuneTranscriber.org, L=Lone Tree, S=CO, C=US"
keytool -selfcert -alias runetranscriberui -keystore $KEYSTORE -storepass runetranscriberui -keypass runetranscriberui
