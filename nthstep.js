// think of dynamic/recursive problems in terms of last step first
    // the last step will either be 3 / 2 / 1

// if we think about all of the paths to nth step, we could ust build them 
    // of the paths to the three previous steps
    // going to the n - 1and hopping one step
    // n - 2 hopping 2 steps
    // n - 3 hopping 3 steps

    // add these paths together

    // recursive
function countWays(n) {
    if (n < 0) {
        return 0;
    } else if (n === 0) {
        return 1;
    } else {
        return countWays(n-1) + countWays(n-2) + countWays(n-3);
    }
}

    // fibonacci
function climbStairs(n) {
    const dp = Array(n).fill(0);

    dp[0] = 1;
    dp[1] = 1;
    dp[2] = 2;

    for (let i = 0; i <= n; i++) {
        dp[i] = dp[i-1] + dp[i-2];
    }

    return dp[n];
}

    // DP
var climbStairs = function(n) {
    const dp = [1,1]
    
    for (let i = 2; i <= n; i++) {
        const result = dp[0] + dp[1]
        dp[0] = dp[1]
        dp[1] = result
    }
    
    return dp[1];
};

    // memoization
function countWays(n) {
    let cache = {};

    function helper(n) {
        if (n <= 3) return n;

        // not in cache
        if (cache[n] === undefined) {
            cache[n] = helper(n-1) + helper(n-2);
        }

        return cache[n];

    }

    return helper(n)

}

