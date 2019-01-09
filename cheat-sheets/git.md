### Inspect changes

`git status`

### Add all changes to _staging area_

`git add .`

### Commit staged changes

`git commit -m "Give a short description of your changes"`

### Push changes to remote

`git push` pushes current branch to the existing remote tracking branch
`git push -u origin <remote-branch-name>` - creates new remote branch named <remote-branch-name> and sets it as tracking to the current local branch. And makes a push to it.

### Pull changes from remove

`git pull`


Flow:
1. Check current status: `git status`

2. If any changes, check what has changed: `git diff`
3. To add changes, do 2 commands: `git add .`, then `git commit -m "message"`
4. To save changes to github, do `git push`

5. (After step 1) If there's no changes, you do `git pull`

6. Do work

7. Do steps 1-4 again in the end.


### git branch ... ###
Doing things with branches. You don't need it for now.

### git checkout ... ###
Switching branches. It can also create branches.
`git checkout -b <branch-name>` -- creates new branch named <branch-name> and switches to it.
`git checkout master` -- switches to the master branch