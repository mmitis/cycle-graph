### Search for Cycles in Graph

scripts which looks for cycles inside graphs described in files in format :

```javascript
    1 0  // first line (first number describes number to pass ( counted from 0 ) second - number of dependencies )
    0 0  // dependency line - 0 can be pass if 0 is visited
    1 2  // 1 can be pass if 2 is visited
    2 0

    ... etc
```

author: Marek Mitis