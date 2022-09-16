# 💟 Decorator
Component, which facilitates the addition of behaviors to individual objects without inheriting from them. 

## Motivation 
- We want to augment an object with additional functionality.
- Do not want to rewrite or alter existing code (OCP). It supports open close principle.
- Want to keep new functionality separate (SRP)
- Need to be able to interact with existing structures.
- Two options:
  - Inherit from required object (if possible).
  - Build a Decorator, which simply references the decorated objects(s).

