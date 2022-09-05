namespace LeetCodeProblems;

internal class _2AddTwoNumbers
{
    // Input: l1 = [2,4,3], l2 = [5,6,4]
    // Output: [7,0,8]
    // Explanation: 342 + 465 = 807.
    public ListNode AddTwoNumbers(ListNode l1, ListNode l2)
    {
        // dummyHead.val = 0;
        var dummyHead = new ListNode();

        // curr.val = 0;
        var curr = dummyHead;

        // carry = 0;
        var carry = 0;

        // while l1 is not null or
        //       l2 is not null or
        //       carry is not 0
        // continue
        while (l1 != null || l2 != null || carry != 0)
        {
            // 1 - x = l1.val == 2 because l1 is not null
            var x = l1 != null ? l1.val : 0;

            // 1 - y = l2.val == 5 because l2 is not null
            var y = l2 != null ? l2.val : 0;

            // sum = 0 + 2 + 5 == 7
            var sum = carry + x + y;

            // carry = 7 / 10 == 0
            carry = sum / 10;

            // curr.next = 7 % 10 == 3
            curr.next = new ListNode(sum % 10);

            // curr = curr.next == 3
            curr = curr.next;

            // l1 != null == l1.
            if (l1 != null)
                l1 = l1.next;

            if (l2 != null)
                l2 = l2.next;
        }

        return dummyHead.next;
    }
}

public class ListNode
{
    public ListNode next;
    public int val;

    public ListNode(int val = 0, ListNode next = null)
    {
        this.val = val;
        this.next = next;
    }
}