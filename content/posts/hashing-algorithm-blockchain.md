---
date: 2021-12-29
title: Hashing Algorithm in Blockchain. Explained with diagram.

template: post
hidden: false


slug: hashing-algorithm-blockchain
  
tags:
-   hashing algorithm
-   blockchain
-   crypto
-   technology
-   study
---
<!-- more -->


<!-- more -->


# **What is a hash function?**

Hash functions are very useful and are present in almost all information security applications. It is a mathematical function that converts a statistical input value to another compressed number value. The input of a hash function is of arbitrary length, but its output is always of a fixed length. 

The values ​​returned by the hash function are called message digests, or also called hash values. In the picture below, you can see this function:

![Flowchart.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1640806200147/ak6IW0KaG.png)

# **Features of the hash function**

We are listing below the key features of the hash function, knowing which you will understand the hash function better:

## **Fixed Length Output (Hash Value)**

- The hash function converts data of an arbitrary length into data of fixed length. This process is also called hashing of data.
- The hash is much smaller than the input data, and hence hash functions are sometimes called compression functions.
- Since a hash is a smaller representation of larger data, it is also called a digest.
- A hash function with n bits of output is called an n-bit hash function. Most of the well-known hash functions generate a value between 160 and 512 bits.

## **Operation efficiency**

- Suppose there is a hash function h whose input is x, then the computation of h(x) will be a faster operation.
- Computationally, hash functions are much faster than any symmetric encryption.

# **Properties of the hash function**

Hash functions have the following properties:

## **Pre-image resistance**

- This property means that it is very difficult to reverse a hash function computationally.
- If an h hash function has produced a z value, it is very difficult to find an input x that will hash to z.
- This property protects against an attacker or hacker who has only the hash value and is trying to extract the input.

## **Second pre-image resistance**

- This property means that if there is an input and its hash, it will be very difficult to find a different input with the same hash.
- If there is a hash function h that takes the input value x and produces the hash value h(x), then it will be very difficult to find any other input y such that h(y) = h(x) satisfies you.
- This property of the hash function proves to be effective in protecting against an attacker or hacker who has an input value and its hash and is trying to insert some other value in place of the original input value.

## **Collision Resistance**

- This property means that it is difficult to find two inputs of any length that result in the same hash. This property is also called the collision-free hash function.
- For a hash function h, it is hard to find any two different inputs x and y such that. For a hash function h, it is very difficult to find any two inputs x and y that satisfy h(x) = h(y).
- Since hash functions are compressing functions with a fixed hash length, it is impossible for a hash function to collide. This collision-free property suggests that these collisions should not be difficult to find.
- This property makes it very difficult for an attacker to find two input values ​​that have the same hash.
- In addition, if a hash function is collision-resistant, it is second pre-image resistance.

# **Hashing Algorithm Design**

The most important part of hashing is a mathematical function that then operates on blocks of data of a fixed size to produce a hash code. This hash function forms an integral part of the hashing algorithm.

The size of each data block is different depending on the algorithm. Mostly, a block size ranges from 128 to 512 bits. The figure below shows the hash function:



![Flowchart (1).png](https://cdn.hashnode.com/res/hashnode/image/upload/v1640806337807/21E7NwGcS.png)

The hashing algorithm comprises several rounds of the above hash function (similar to a block cipher). Each round takes a fixed size of input, which is mostly a combination of the current message block and the output of the last round.

This process is repeated for many rounds, as it has to hash the entire message. Performing this function of the hashing algorithm is shown in the figure below:


![Flowchart (2).png](https://cdn.hashnode.com/res/hashnode/image/upload/v1640806385688/v9AC6fWKv.png)

Since the hash value of the first message block becomes the input of the second hash operation, the output of which goes to the third operation - and so on. This effect is also known as the AVALANCHE effect of hashing.

The Avalanche effect gives completely different hash functions for two different data if they differ even in a single bit.

Now you need to understand the difference between hash function and algorithm very well. A hash function generates a hash code by performing two operations on blocks of binary data of fixed size.

Whereas hashing algorithm is a process which uses a hash function to describe how the message will be broken and how to chain together the results of previous message blocks.

# **Application of hash function**

Hash functions are used for:

## **Password storage**

Hash functions help keep your password secure.

- Instead of storing the password explicitly, most log-on processes store the hash value of the password in a file.
- The password file comprises pairs of tables which are in the form (user ID, h(P)).
- You can understand this log-on process by looking at the below-mentioned-


![Flowchart (3).png](https://cdn.hashnode.com/res/hashnode/image/upload/v1640806454734/_K6tsDapi.png)

- An intruder can only see the hash of the password, even if he has accessed the password. He can neither log on using the hash nor extract the password from the hash value. This is because hash functions have the property of pre-image resistance.

## **Data integrity check**

Data integrity check is the most commonly used application of the hash function. It is used to generate checksums of data files. This application informs the user about the correctness of the data.

You can understand this process through the following picture-


![Flowchart (4).png](https://cdn.hashnode.com/res/hashnode/image/upload/v1640806486829/YrSllWd2Gvd.png)

Integrity Check informs the user about any changes, edits, or modifications made to the file. Yes, it does not guarantee the originality of the file.

Instead of modifying the data, the attacker can change the entire file and compute the new hash and send it to the user. That is why the work of this application is only when the user is sure about the originality of his file.

Some well-known hash functions are:

- Message Digest (MD)
- RIPEMD
- Secure Hash Function (SHF)
- whirlpoo