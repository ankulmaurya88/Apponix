arr = [1, 4, 58, 90, 90, 91]
x = 91

def search(nums, x) -> int:
    start = 0
    end = len(nums) - 1  # Fix 1: Set to the last valid index

    while start <= end:
        mid = (start + end) // 2

        if nums[mid] == x:
            return mid
        elif nums[mid] > x:
            end = mid - 1   # Fix 2: Move the end pointer left
        else:
            start = mid + 1 # Fix 3: Move the start pointer right

    return -1

print(search(arr, x))
