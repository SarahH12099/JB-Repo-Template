# JB-Repo-Template
My modern jb repo template, includes web depictions, modern depictions, zstd/gz/bz2 compressed packages script, packages file gen, release file md5 and sha256 gen, add repo buttons and more.<br><br>
You will need to run dos2unix on the repo.sh file to convert it to unix cause GitHub uploads it as dos. (dos2unix repo.sh)<br><br>
How to use: cd into your repo directory on linux or macos or wsl 2 and run ./repo.sh, it will say "Done" once it is complete. <br><br>
What the web depictions look like (Cydia, Zebra, Installer):<br>
[Picture 1](https://sarahh12099.github.io/files/webdepiction1.jpg) [Picture 2](https://sarahh12099.github.io/files/webdepiction2.jpg) [Picture 3](https://sarahh12099.github.io/files/webdepiction3.jpg)
<br>
What the native depictions look like (Sileo, Zebra Alpha):<br>
[Picture 1](https://sarahh12099.github.io/files/nativedepiction1.png) [Picture 2](https://sarahh12099.github.io/files/nativedepiction2.png) [Picture 3](https://sarahh12099.github.io/files/nativedepiction3.png)
<br><br>
To use the depictions in your packages add them to your control file like so:<br>
Depiction: https://urltoyourwebdepiction.html<br>
SileoDepiction: https://urltoyoursileodepiction/depiction.json