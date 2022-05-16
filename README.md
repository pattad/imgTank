# imgTank

Welcome to the imgTank project. This IC project contains a canister which can store all your pictures.
Currently, every canister may have a capacity of 8 Gbit.
Also be aware that the POST limit for uploading on the IC is at 2MB.
Download limit would be at 3.14 MB/response.

## Content

Have a look at the following files:

```bash
src/imgTank/main.mo
src/imgTank_assets/src/index.js
```

## Deplyment

The deployment is like any other IC project. Just start it locally or deploy it directly on the IC.

(Optionally) To define a specific memory allocation size you may use the following cmds:
```bash
dfx canister --network ic update-settings imgTank --memory-allocation 1GiB
dfx canister --network ic status imgTank
```