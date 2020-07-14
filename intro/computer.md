# Inside a computer

## Parts of a computer

Although computers come in many different shapes and forms, they all share a
very similar architecture under the hood.

### CPU

Central Processing Unit

Heart and brain of the computer.
Every core in a CPU executes instructions.
An example of an instruction is to add two numbers, or read / write a small
amount of data from or to memory.

The clockspeed of a CPU is the number of instructions that each core can execute per
second.
A 2.2 GHz CPU can execute 2.200.000.000 instructions per second.
As a reference: 2.200.000.000 seconds are ~70 years.

### RAM

Random Access Memory.

The working memory of the computer.
Everytime the power supply is stopping the RAM gets erased.
RAM is organized as bytes, each containing 8 bits.

Every byte in RAM has an address, which the CPU uses to specify at which
position data should be read or written.
These addresses are also called **pointers**

### Mainboard

Connects all the different components of the computer.
Prewired cables through which signals can travel from one component to the
other.

The prewired connections between components are often called a **busses**.

### I/O - Input Output

#### Hard Drive

Persistent Memory. The data stored on a hard drive won't be lost when the power
supply is shut down. In contrast to RAM, it's much slower, but also cheaper for
a given size.

#### Network Controller

Makes it possible to connect computers with each other to exchange data signals.
These are typically streams of bytes.

#### Other Peripherals

- Graphics Card
- USB Controllers
- Audio Card

In general CPU and RAM are communicating with every kind of peripheral over the
same interface. Reading and writing bytes into buffers.
A **driver** is a piece of software that coordinates this process for a specific
hardware component that can be connected to one of the busses.

## Challenge: Dis- and Reassemble a computer

### Check questions

- What is a 2.2 GHz Dual Core Processor?
- How much GB's of RAM does your computer have?
- What are the differences between RAM and hard drives?
- What is a hardware driver?
- Which other computer components can you name?
- Try to name as many different devices that are computers as possible.

### Terminology

- CPU
- RAM
- Computer memory
- Motherboard
- I/O
- Bus
- Volatile and persitent memory
- Pointers
- Hardware driver
