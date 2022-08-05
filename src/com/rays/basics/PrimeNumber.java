package com.rays.basics;

public class PrimeNumber {
public static void main(String[] args) {
	int num=563;
	int count=0;
	int i;
	int sum=0;
	for(i=2;i<num;i++) {
		if(num%i==0) {
			count++;
			System.out.print("not a prime number");
			break;
		}
	}
	if(count==0) {
		System.out.print("prime number");
	}
		
}
}
