---
date: 2021-12-31
title: Byzantine Generals Problem in Blockchain. Explained.

template: post
hidden: false


slug: byzantine-general-problem
  
tags:
-   blockchain
-   byzantine problem
-   crypto
-   technology
---
<!-- more -->


<!-- more -->


## Introduction

The Byzantine Generals Problem is discussed in a thesis titled “The Byzantine Generals Problem,” which was publicized by Leslie Lamport, in 1982. This problem relates to the reliability of a group of components in a distributed system. Based on the idea whether generals of the countries that surround a hostile country can agree on strategies only through communicating with each other if some of them are betrayers transmitting false information, it is questioned whether a proper consensus may be built when any group of components in a distributed system transmits false information. 


![Screenshot from 2022-01-02 13-01-25.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1641109441268/3HDFwXPtU.png)



According to Lamport et al, when the number of components transmitting false information is less than one-third of the total, a solution is got, or in other words, a proper consensus may be built as a whole. The percentage of participants who transmit false information among all participants decides whether a consensus may be built or not. In the Bitcoin blockchain, a consensus or a decision of an authentic blockchain is made through PoW and mutual approval of the results thereof. As explained above, blocks are linked into a chain in a manner that they keep past information, and therefore, in order to conclude an illegal transaction as a consensus in the Bitcoin blockchain, it is necessary to continue creating blocks faster than the authentic fork or re-create all past blocks. This requires a 50% or larger percentage of the machine power of the entirety, and enormous computational resources are necessary. It is much more economically rational to get rewards through proper mining, which discourages people from conducting illegal transactions. This mechanism is said to have solved the Byzantine General's Problem to the extent practicable.

## Byzantine Fault in Blockchain Technology 

Byzantine failures are the most common and trickiest to diagnose. The so-called fail-stop failure mode is the most basic of the failure modes. Whereas fail-stop failure mode simply means that the only way for a node to fail is for it to crash, which is noticed by other nodes, Byzantine failures imply no constraints, so the failed node can generate any data it wants, even data that makes it appear to be functional. As a result, Byzantine failures can cause problems with failure detection systems, making fault tolerance problematic. A Byzantine fault is a condition in which components in a computer system, particularly distributed computing systems, may fail and there is imperfect information on whether they have failed. 

The term is derived from an allegory known as the "Byzantine Generals Problem" which describes a situation in which the system's actors must agree on a coordinated plan to avert catastrophic failure, yet some of these individuals are unreliable. A fault-tolerant distributed computer system's resilience to component failures is known as Byzantine fault tolerance (BFT). The NEO platform, which is a blockchain-based platform with its own coin and the ability to create digital assets and smart contracts, uses this as a consensus process. Figure shows an example of a Byzantine Fault. A component, such as a server, can appear both broken and functional to failure-detection systems in a Byzantine fault, exhibiting various symptoms to different observers. It's difficult for the other components to announce it failed and remove it from the network, since they have to first agree on which component failed. Any defect that presents diverse symptoms to different observers is referred to as a Byzantine fault. In systems that need consensus, a Byzantine failure is the loss of a system service owing to a Byzantine fault. The goal of Byzantine fault tolerance is to defend against system component failures with or without symptoms that prevent other system components from agreeing among themselves, which is required for the system's correct operation. In blockchain, the Byzantine faults provide a challenge in maintaining transactions. Malicious users have significant economic incentives to try to cause errors because of the value stored in these ledgers. Byzantine Fault Tolerance, and hence a solution to the Byzantine Generals' Problem for blockchains, is, however, desperately needed. Without BFT, a peer can send and post fake transactions, essentially nullifying the blockchain's trustworthiness.


![Screenshot from 2022-01-02 13-09-47.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1641109513048/mlrvcp5Mt.png)

To make matters worse, there is no central authority to take charge of the situation and restore the damage. A conventional blockchain transaction is shown in the figure.


![Screenshot from 2022-01-02 13-10-21.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1641109538357/naswP3Nr1.png)

It's hard to reliably identify which nodes are producing inaccurate transaction information, whether purposefully or by accident, because nodes are geographically dispersed and independent of each other and any central authority. Byzantine Fault Tolerance is a quality of a distributed computer system that allows it to overcome this challenge and build stable consensus despite the fact that some nodes, either mistakenly or intentionally, disagree with the others.

![Screenshot from 2022-01-02 13-12-01.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1641109574872/yUIsl6emE.png)


Cryptocurrencies are decentralized, unlike currency money, which is normally governed by a central authority, such as a bank. Many cryptocurrencies, like Bitcoin and Ethereum, can now operate without the help of a government or corporation thanks to PoW. This consensus process is critical for avoiding double spending, or when a coin or token is used to enable a transaction more than once. It's how new blocks are added to the blockchain network and transactions are verified. When a bitcoin miner successfully completes the Proof of Work on a block, the network allows it. The process of transaction management is displayed in above figure.

## Consensus in Blockchain Technology
Starting with the same beginning value state, the nodes in any dispersed the network should agree on a specific output value in a transition state. This is referred to as agreeing.
And this should be accomplished in a way that allows nodes to deviate and act
either maliciously (crashing or going offline) or non-maliciously (crashing or
going offline) (Byzantine).
If the following conditions are met, the procedure is said to be successful.

● The nodes choose an output value.
● This deterministic method confirms termination, or that the majority of
nodes agree on the same output value.
● This shows that both parties agree.

There are many types of consensus algorithms:
● Proof-of-Work
● Proof-of-Stake
● Delegated Proof-of-Stake
● Leased Proof-of-Stake
● Proof of Elapsed Time
● Practical Byzantine Fault Tolerance

Will discuss Proof-of-Work and Byzantine Fault Tolerance and how they can be leveraged into blockchain technology to overcome transaction management’s problems.

## Solutions to Byzantine Fault in Blockchain

With the passage of time, initiatives to solve this distributed network/blockchain-centric issue have been made. We currently have several distributed network systems that provide a partial, if not complete, solution to this concern. Various consensus methods are designed in blockchain, which automatically addresses the Byzantine issue.

There are many algorithms that can provide reliable and robust solutions to the Byzantine Fault issue in Blockchain. One such approach is Proof-of-Work (PoW) Algorithm.

A group of special nodes known as miners listen to every transaction that occurs within a blockchain network. They compete to solve a computationally intensive puzzle as quickly as possible by allocating.
Computing resources to construct a valid block of transactions. A block in a blockchain network typically contains a list of all transactions, as well as a nonce, merkle root hash, previous block hash, and a block header (as seen in Figure)


![Screenshot from 2022-01-02 13-21-16.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1641109903027/K3a1F5dQ0.png)

It takes a miner longer to complete a task as the difficulty level rises. When a miner node solves the problem, when they can generate a valid block of transactions, they broadcast the answer to all peer nodes.


![Screenshot from 2022-01-02 13-23-17.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1641110015377/X6qoOe23U.png)

It is simple to verify such a solution. If the hash of a block is supplied as the preceding block hash during the construction of a new block, it is accepted. As a result, all nodes finally establish an agreement (as shown in Figure), which is known as proof-of-work.

## Byzantine Fault Tolerance in Blockchain Technology

The goal of Byzantine fault tolerance is to defend against system component failures with or without symptoms that prevent other system components from agreeing among themselves, which is
required for the system's correct operation.

Assuming there are enough operationally correct components to provide the service, the remaining operationally correct components of a Byzantine fault tolerant system will continue providing the system's service as designed.

The practical Byzantine Fault Tolerance model is heavily reliant on specific Assumptions. For a given window of vulnerability, the most common. Assumption in practical BFT is that the number of malicious nodes in the network cannot be equal to or over one-third of the total nodes in the System. Byzantine Fault Tolerance is a quality that characterises a system that accepts the Byzantine Generals' Problem's class of failures. The most challenging type of failure mode is Byzantine Failure. It contains no constraints and makes no assumptions about the type of behaviour that a node can exhibit (e.g. a node can generate any kind of arbitrary data while posing as an honest actor). The most severe and difficult to deal with are.

Byzantine Faults. Byzantine Fault Tolerance is required in aeroplane engine systems, nuclear power plants, and almost any system whose actions depend on the findings of many sensors.

It's now crucial to figure out how the Byzantine Generals Problem can be applied to blockchain. With a peer-to-peer network, attaining consensus may be aided by unanimous agreement among loyal and non-faulty nodes. In a case when all nodes duplicate an incoming message, the foundation of Byzantine Fault Tolerance is clear. If a node repeats the incoming message, it plainly implies that it has no problems or errors. If the recipients repeat the incoming message, the network may quickly rule out Byzantine nodes. The term "byzantine node" refers to a traitorous node that purposefully lies or misleads other nodes in the network. The byzantine node may also deceive or lie to the other nodes in the consensus protocol as shown in figure.


![Screenshot from 2022-01-02 13-28-42.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1641110338822/u1TX-0CHe.png)

Lieutenant 2 is a byzantine node misleading the network.

Byzantine Fault Tolerance in blockchain would help it overcome failures in a perfectly functioning blockchain network. Byzantine nodes, often known as malevolent nodes, can lead to Byzantine failures. Users may encounter two sorts of Byzantine failures, the first of which is entirely technical in origin. A little technical problem in the node could compromise its functioning, and it could stop responding or working altogether in some situations. The arbitrary node failure is the second sort of Byzantine failure.

A node may exhibit the following characteristics in the event of an arbitrary node failure:

● Failure to respond
● Providing responses to outcomes with errors.
● Providing purposely deceptive findings in response to enquiries.
● Providing different results to various components of the system in
response to a single query.

The following are the crucial steps to comprehending how Byzantine Fault Tolerance functions:

● Clients send requests to the leader node for specified service operations to be performed.
● The request could then be broadcast to backup nodes in the network by the leading node.
● Nodes could also guarantee that allocated requests are completed and that a relevant response is sent to the client.

As shown in figure, if 'm’ represents the maximum number of nodes having the potential for errors in this situation. The client would then wait for (m+1) similar responses from multiple nodes. The outcome is essentially a reflection of the operation's outcome.


![Screenshot from 2022-01-02 13-32-05.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1641110540016/6pMCUAgX8I.png)

It's also crucial to make sure that nodes in Blockchain meet the key requirements for Byzantine Fault Tolerance (BFT). For practical BFT, the nodes must be deterministic and start in the same state. The result would show that all honest nodes could agree on the record's order. In the end, the nodes might either accept or reject the record. Practical BFT, interestingly, uses a round-robin type format for changing the leader node in each view.
A technique known as view change can replace the leader node. When the leader node has not broadcast the request for a certain.

length of time, this protocol is appropriate. Furthermore, Byzantine Fault Tolerance, whether synchronous or asynchronous, assures that a significant majority of honest nodes can agree on a leader's flawed nature. The honest nodes could also replace the faulty leader with the next available leader node in the chain.

Byzantine Fault Tolerance clearly plays a vital role in altering consensus techniques. Blockchain applications are progressively gaining traction in a variety of industries. However, with today's blockchain networks, there are a slew of issues. As a result, it's critical to consider Byzantine Fault Tolerance (BFT) as a critical tool for ensuring that the network continues to function correctly in the face of hostile actors. Because blockchain is transparent, it may attract many unwelcome users seeking to exploit their personal interests.

## Conclusion and Future Works

The increasing reliance on internet services places a significant demand on the computer systems that deliver those services. Byzantine fault tolerance (BFT) is a promising solution for solidifying such systems and providing the high dependability that is much needed. BFT uses redundant copies of the servers to ensure that a replicated system continues to provide accurate services even if only a tiny section of the system is attacked. With other methods like Proactive Recovery and integration of Software Transactional Memory (STM) into Byzantine Fault Tolerance (BFT), usage of a more robust and reliable transaction system with failure resilience can be expected with growing popularity and inclusion of Blockchain Technology into everyday life.




