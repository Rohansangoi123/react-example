package com.rays.basics;

public class Arrgument {
public static void main(String[]args) {
	for(int i=0;i<args.length;i++) {
	String s=args[i];
	for(int a=0;a<s.length();a++) {
		System.out.print(s.charAt(a));
	}
}
}
}