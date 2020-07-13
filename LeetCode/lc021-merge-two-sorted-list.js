let mergeTwoLists = (l1, l2) => {
    var mergedHead = {
        val: -1,
        next: null
    },
        crt = mergedHead;
    while (l1 && l2) {
        if (l1.val > l2.val) {
            crt.next = l2;
            l2 = l2.next;
        } else {
            crt.next = l1;
            l1 = l1.next;
        }
        crt = crt.next;
    }
    crt.next = l1 || l2;

    return mergedHead.next;
};

const l1 = {
    val: 1,
    next: {
      val: 2,
      next: {
        val: 4,
        next: null
      }
    }
  }

const l2 = {
    val: 1,
    next: {
      val: 3,
      next: {
        val: 5,
        next: null
      }
    }
  }

console.log(mergeTwoLists(l1,l2))
