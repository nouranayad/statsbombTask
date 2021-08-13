Note:
I faced JavaScript Heap out of memory error when using Array.prototype.push() which I fixed by running the benchmark using this command:
- `node --max-old-space-size=4096 benchmark.js`
I am not sure if you will face this error in your environment but if you did you can use this command.
