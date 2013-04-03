nodecopter-repair
=================

Repair what you can — but when you must fail, fail noisily and as soon as possible.

nodecopter-repair, is a module that allows your nodecopter program to safely return your drone to the ground, after an uncaughtException or kill command.


Currently it has two listeners:

* SIGINT (you killed your program with Ctrl + C)

* uncaughtException

When these events happen, the drone should stop() and land()