TEST="yarn test"
COMMIT="git add . && git commit --amend -m 'TCR-STEP: Working on something'"
REVERT="git clean -fd && git reset --hard"

#if you Want to go FULL TCR
#(eval $TEST) && (eval $COMMIT) || (eval $REVERT)
(eval $TEST) && (eval $COMMIT)
