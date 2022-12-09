var shuffle = function(nums, n) {
    let res = []
    for(var i = 0; i < n; i++) {
        res.push(nums[i])
        res.push(nums[i+n])
    }

    return res
};
