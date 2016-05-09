# Teddy Loop Bug Demo App

This roosevelt sample application demonstrates a bug found in the Teddy templating system. Looping through an array nested inside of another 
Teddy `<loop>` construct mutates its contents, leaving duplicates of only the final value of the last loop through of the inner loop in all
array indexes.

The general structure that demonstrates this bug is:

```
<loop through='parentArray' val='p'>
    <loop through='p.childArray' val='c'>
      <!-- Mutates each entry of the "c" child array -->
      ...
    </loop>
</loop>
```