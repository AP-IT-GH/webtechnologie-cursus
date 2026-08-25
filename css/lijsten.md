# lijsten

## list-style-type

```css
ul.a {
  list-style-type: circle;}
ul.b {
  list-style-type: square;}
ol.c {
  list-style-type: upper-roman;}
ol.d {
  list-style-type: lower-alpha;}
```

**ul** (= unordered list): none | disc (= standaard-waarde) | circle | square;\
\*\*ol \*\*(= ordered list): decimal (1 2 3) | decimal-leading-zero (01 02 03) | lower-alpha (a b c) | upper-alpha (A B C) | lower-roman (i. ii. iii.) | upper-roman (I II III)

{% embed url="https://flems.io/#0=N4IgzgpgNhDGAuEAmIBcIB0ALeBbKIANCAGYCWMYaA2qAHYCGuEamO+RIsA9nYn6wA8AQgAiAeQDCAFQCaABQCiAAnZQAfAB06gtVp1YIDJPsFh4ATxj6ArlAwNlwbcuVQy5gLTmrET5YAHCFRlWDIAJ1gYAG5tAF9tbTsMACMnFzcPeG9LGH8LIJCwAEcbBnCIWLoEum1ue1h0uld3Lx88wODlGwCg8M9w7lwGOiqauvskJpasnN98wrduAHcIfoYoAKwGMe1BAHp2iFN9w2NTFO4kC309rAAmdWlDTLbcv07leUG+ywOH246ALqRQADyYARgym4JG6dG44SQa2Qr3gYFQB2BezsoSgDDAYAAvJoQAwSfpXIJ3OpJDCSBAIAdqRkqWQnkYmWyWdTabBHLS8ZyTnZAYIcVF8USSSlydy2bSSPTGftmc1lKz2QwhXKadw+coBVqVVydPsRYkgSDwbhIRBobCEUiKlNWmiMfssTp6rjJcSuLK1RqFUrtYHqdIOcaKeqeXr+fUjaqDvVRd6JQS-UgA5TY4qGaGc2yI4mTYXdfrDaHkxoLQdLtcTnoLdpOJAYAgyLwqOgAKw91AABhAcUI9CYLHQGAAVlRiDw+BABOhh6OQIxmKwMLACZx5-x4KxhwBdOJAA" %}

## list-style-image

```css
ul {
    list-style-image: url("../images/star.png");}
li {
    margin: 10px 0px 0px 0px;}
```

`list-style-image`: none (= standaardwaarde) | url;

{% embed url="https://flems.io/#0=N4IgzgpgNhDGAuEAmIBcIB0ALeBbKIANCAGYCWMYaA2qAHYCGuEamO+RIsA9nYn6wA8AQgAiAeQDCAFQCaABQCiAAnZQAfAB06gtVp1YIDJPsFh4ATxj6ArlGXBty5VDLmAtOasR3ZXAwBzCFRlGwAnKAAKAHIceAAHMFQAemSwhgB3DACyeCwbACMbSDCePgg+DB5cZIBBeXcASWl3AHEACWSGMEh4MHckCFxufoyIAsRYLGSABgA2GYKAJgB2AoBGEnG52DWSAE59hmWIGYBWY4Y59f2ADgBme6QGdYKSEhnk+LI6d1c6HxkMoYeJ0ALRACUAG5tABfbSCZJeawI5KGYymArcJAWfQIrBLdTSQwuNzwTyWGC+fxBZTyMLceIQMKWREEvE6eJEkmuDzIwE0iDKeIMpksizKMBM2BkcgQMDKBh0ZR+QJC7rKPJC3nwFWIXDKfxhADWzNQiK52gRdn0zkErnUkm47wgEERDqcyntZCJRndPs93sd3FgDGUTqgDH9pmSNqtOmSWJxMb08e0nEgMAQZF4VHQ61uqCWMxAsMI9CYLHQGAAVlRiGV+PBWKXyyBGMxWFUepxGxVm+hSwBdWFAA" %}

## list-style-position

```css
ul {
    width: 150px;}
li {
    margin: 10px;}
ul.illuminations {
    list-style-position: outside;}
ul.season {
    list-style-position: inside;}
```

`list-style-position`: outside (= standaard-waarde) | inside;

**outside**: De markering bevindt zich links van de blok tekst. Indien de `list-style-position` niet uitdrukkelijk vermeld wordt, is dit de standaard weergave.\
**inside**: De marker zit vervat binnenin het tekstkader zelf.

{% embed url="https://flems.io/#0=N4IgzgpgNhDGAuEAmIBcIB0ALeBbKIANCAGYCWMYaA2qAHYCGuEamO+RIsA9nYn6wA8AQgAiAeQDCAFQCaABQCiAAnZQAfAB06gtVp1YIDJPsFh4ATxj6ArlAwNlwbcuVQy5gLTmrETwAduMDJ4Ml5UZW4beGCkCABubQBfbW07DAAjJxc3D3hvSxgAoJCwugiyOliE5O1BAHofazr6w2NTDO4kC306rABGdWlDXK8mv0Dg0N5leQAnbn8IOcsGgd6DACZ1dzHCiZLp8sjo6uUACjiSBjt4AEpUNe26u2VYKAYwMABeTRAGP76VyCdzqSTcEgkCAQZSeZQAQWUGTmEAA7shlEg5pUANbKfwo-wMFFIZQkBa4ZQLT6IUk8SHQpFGKqEZSorBkWBYZTEmHwEaQZBgSIkJlzbEQYXk7iU-kw8EMxz+D58BqgnIgshDIywhF0HkUhihWBMgBuywYAHMYTxcLheFALPjCbzSRknYEbNi6JbVNx4JE5kjuBRKr7UUblpFzUHYF6MTAGObhRDlHLlJImNB3I5gnQIFUPKyGPqIDHLSiC8owFg5jYsucMjYa3dlIxQua09wEcEGGqtRrQeDYI5wR9dYiR3NOu2MWAIQGsbjnV0bLAMe7lMN5dwR54x6OZUS6BYMFuRku6DiAOTCxjMKkQKFzYXwbvwVHd1MhFPYy2VBgoGUMMSTIAsYlZdlOW5dEUWUHFuHHOhTguXMojmdcRTeBgGUqCBWxLOld0cRNk37Ux6jsDZdG2XZ8nGYopjKCpCziR5WmeHRXneT4fj+DJAUHLUFShGE4URZE0QxS88QJCAiRJMkKSpbgaQxelRKZEswEgjkuQNPkBWhJAU1FDJlglKVlPTESdWVEt4HIoTtUccT9WJGUjU5M0LWtN4ZXtOhHWdeTXSRD10LDP0A24INOlDH02UjINuBjN541JUjJSwmysygHNqzwwsdJ5Uty0rfUazrBsmxbNsvM7N8ezIPt6nVfVlE1MFiIzRDXIRbDp14SNSXnEhF29WSFiQNcNydbder3A9etwY9T3PGEZNveqHxRZ9X3fT8sJ-QMyH-RggJA5AwL4EqoP02CYQQpCUPONCvUw1MR1w-MCLoIiRzcIwyLagcdEojRUnBzpugovQoe0ThIBgBAyiodAAGYAFZUAABhAJJCHoLNWAwAArKhiB4PhwNYAmiZAe8WHQDBYC+Thqf4eA6aSABdJIgA" %}

## list-style

```css
ul {
    list-style: inside circle;
    width: 300px;}
li {
    margin: 10px 0px 0px 0px;}
```

Bij `list-style` kunne zowel `list-style-type`, `list-style-position` en `list-style-image` benoemd worden.
