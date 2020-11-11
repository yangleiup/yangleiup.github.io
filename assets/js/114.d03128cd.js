(window.webpackJsonp=window.webpackJsonp||[]).push([[114],{324:function(e,t,a){"use strict";a.r(t);var s=a(0),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"react-fiber-架构-一"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#react-fiber-架构-一","aria-hidden":"true"}},[e._v("#")]),e._v(" React Fiber 架构(一)")]),e._v(" "),a("h2",{attrs:{id:"react-的核心思想"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#react-的核心思想","aria-hidden":"true"}},[e._v("#")]),e._v(" React 的核心思想")]),e._v(" "),a("p",[e._v("内存中维护一颗虚拟DOM树，数据变化时（setState），自动更新虚拟 DOM，得到一颗新树，然后 Diff 新老虚拟 DOM 树，找到有变化的部分，得到一个 Change(Patch)，将这个 Patch 加入队列，最终批量更新这些 Patch 到 DOM 中。")]),e._v(" "),a("h3",{attrs:{id:"react-的工作过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#react-的工作过程","aria-hidden":"true"}},[e._v("#")]),e._v(" React 的工作过程")]),e._v(" "),a("p",[e._v("当我们通过render()和 setState() 进行组件渲染和更新的时候，React 主要有两个阶段：\n"),a("img",{attrs:{src:"/imgs/react1.png",alt:""}})]),e._v(" "),a("ul",[a("li",[a("p",[a("code",[e._v("调和阶段(Reconciler)")]),e._v("：官方解释。React 会自顶向下通过递归，遍历新数据生成新的 Virtual DOM，然后通过 Diff 算法，找到需要变更的元素(Patch)，放到更新队列里面去。")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("渲染阶段(Renderer)")]),e._v("：遍历更新队列，通过调用宿主环境的API，实际更新渲染对应元素。宿主环境，比如 DOM、Native、WebGL 等。")])])]),e._v(" "),a("p",[e._v("在协调阶段阶段，由于是采用的递归的遍历方式，这种也被成为 Stack Reconciler，主要是为了区别 Fiber Reconciler 取的一个名字。这种方式有一个特点：一旦任务开始进行，就无法中断，那么 js 将一直占用主线程， 一直要等到整棵 Virtual DOM 树计算完成之后，才能把执行权交给渲染引擎，那么这就会导致一些用户交互、动画等任务无法立即得到处理，就会有卡顿，非常的影响用户体验。")]),e._v(" "),a("blockquote",[a("blockquote",[a("p",[e._v("之前的问题主要的问题是任务一旦执行，就无法中断，js 线程一直占用主线程，导致卡顿。")])])]),e._v(" "),a("h4",{attrs:{id:"浏览器每一帧都需要完成哪些工作？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#浏览器每一帧都需要完成哪些工作？","aria-hidden":"true"}},[e._v("#")]),e._v(" 浏览器每一帧都需要完成哪些工作？")]),e._v(" "),a("p",[e._v("页面是一帧一帧绘制出来的，当每秒绘制的帧数（FPS）达到 60 时，页面是流畅的，小于这个值时，用户会感觉到卡顿。")]),e._v(" "),a("p",[e._v("1s 60 帧，所以每一帧分到的时间是 1000/60 ≈ 16 ms。所以我们书写代码时力求不让一帧的工作量超过 16ms。")]),e._v(" "),a("h5",{attrs:{id:"浏览器一帧内的工作六个步骤的任务："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#浏览器一帧内的工作六个步骤的任务：","aria-hidden":"true"}},[e._v("#")]),e._v(" 浏览器一帧内的工作六个步骤的任务：")]),e._v(" "),a("ul",[a("li",[e._v("处理用户的交互")]),e._v(" "),a("li",[e._v("JS 解析执行")]),e._v(" "),a("li",[e._v("帧开始。窗口尺寸变更，页面滚去等的处理")]),e._v(" "),a("li",[e._v("rAF(requestAnimationFrame)")]),e._v(" "),a("li",[e._v("布局")]),e._v(" "),a("li",[e._v("绘制")])]),e._v(" "),a("p",[e._v("如果这六个步骤中，任意一个步骤所占用的时间过长，总时间超过 16ms 了之后，用户也许就能看到卡顿。")]),e._v(" "),a("p",[e._v("而在上一小节提到的调和阶段花的时间过长，也就是 js 执行的时间过长，那么就有可能在用户有交互的时候，本来应该是渲染下一帧了，但是在当前一帧里还在执行 JS，就导致用户交互不能马上得到反馈，从而产生卡顿感。")]),e._v(" "),a("h6",{attrs:{id:"解决方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解决方案","aria-hidden":"true"}},[e._v("#")]),e._v(" 解决方案")]),e._v(" "),a("p",[e._v("把渲染更新过程拆分成多个子任务，每次只做一小部分，做完看是否还有剩余时间，如果有继续下一个任务；如果没有，挂起当前任务，将时间控制权交给主线程，等主线程不忙的时候在继续执行。这种策略叫做 Cooperative Scheduling（合作式调度），操作系统常用任务调度策略之一。")]),e._v(" "),a("blockquote",[a("p",[e._v("操作系统常用任务调度策略：先来先服务（FCFS）调度算法、短作业（进程）优先调度算法（SJ/PF）、最高优先权优先调度算法（FPF）、高响应比优先调度算法（HRN）、时间片轮转法（RR）、多级队列反馈法。")])]),e._v(" "),a("p",[e._v("合作式调度主要就是用来分配任务的，当有更新任务来的时候，不会马上去做 "),a("code",[e._v("Diff")]),e._v(" 操作，而是先把当前的更新送入一个 "),a("code",[e._v("Update Queue")]),e._v(" 中，然后交给 "),a("code",[e._v("Scheduler")]),e._v(" 去处理，Scheduler 会根据当前主线程的使用情况去处理这次 Update。为了实现这种特性，使用了requestIdelCallbackAPI。对于不支持这个API 的浏览器，React 会加上 pollyfill。")]),e._v(" "),a("p",[e._v("在上面我们已经知道浏览器是一帧一帧执行的，在两个执行帧之间，主线程通常会有一小段空闲时间，requestIdleCallback可以在这个空闲期（Idle Period）调用空闲期回调（Idle Callback），执行一些任务。")]),e._v(" "),a("ul",[a("li",[e._v("低优先级任务由"),a("code",[e._v("requestIdleCallback")]),e._v("处理；")]),e._v(" "),a("li",[e._v("高优先级任务，如动画相关的由"),a("code",[e._v("requestAnimationFrame")]),e._v("处理；")]),e._v(" "),a("li",[a("code",[e._v("requestIdleCallback")]),e._v("可以在多个空闲期调用空闲期回调，执行任务；")]),e._v(" "),a("li",[a("code",[e._v("requestIdleCallback")]),e._v("方法提供 deadline，即任务执行限制时间，以切分任务，避免长时间执行，阻塞UI渲染而导致掉帧；")])]),e._v(" "),a("p",[e._v("这个方案看似确实不错，但是怎么实现可能会遇到几个问题：")]),e._v(" "),a("ul",[a("li",[e._v("如何拆分成子任务？")]),e._v(" "),a("li",[e._v("一个子任务多大合适？")]),e._v(" "),a("li",[e._v("怎么判断是否还有剩余时间？")]),e._v(" "),a("li",[e._v("有剩余时间怎么去调度应该执行哪一个任务？")]),e._v(" "),a("li",[e._v("没有剩余时间之前的任务怎么办？")])]),e._v(" "),a("p",[e._v("接下里整个 Fiber 架构就是来解决这些问题的。")]),e._v(" "),a("h2",{attrs:{id:"fiber"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fiber","aria-hidden":"true"}},[e._v("#")]),e._v(" Fiber")]),e._v(" "),a("p",[e._v("为了解决之前提到解决方案遇到的问题，提出了以下几个目标：")]),e._v(" "),a("ul",[a("li",[e._v("暂停工作，稍后再回来。")]),e._v(" "),a("li",[e._v("为不同类型的工作分配优先权。")]),e._v(" "),a("li",[e._v("重用以前完成的工作。")]),e._v(" "),a("li",[e._v("如果不再需要，则中止工作。")])]),e._v(" "),a("p",[e._v("为了做到这些，我们首先需要一种方法将任务分解为单元。从某种意义上说，这就是 Fiber，"),a("code",[e._v("Fiber 代表一种工作单元")]),e._v("。")]),e._v(" "),a("p",[e._v("但是仅仅是分解为单元也无法做到中断任务，因为函数调用栈就是这样，每个函数为一个工作，每个工作被称为"),a("code",[e._v("堆栈帧")]),e._v("，它会一直工作，直到堆栈为空，无法中断。")]),e._v(" "),a("p",[e._v("所以我们需要一种增量渲染的调度，那么就需要重新实现一个堆栈帧的调度，这个堆栈帧可以按照自己的调度算法执行他们。另外由于这些堆栈是可以自己控制的，所以可以加入并发或者错误边界等功能。")]),e._v(" "),a("p",[e._v("因此 Fiber 就是重新实现的堆栈帧，本质上 Fiber 也可以理解为是一个"),a("code",[e._v("虚拟的堆栈帧")]),e._v("，将可中断的任务拆分成多个子任务，通过按照优先级来自由调度子任务，分段更新，从而将之前的同步渲染改为异步渲染。")]),e._v(" "),a("p",[e._v("所以我们可以说 Fiber 是一种数据结构(堆栈帧)，也可以说是一种解决可中断的调用任务的一种解决方案，它的特性就是"),a("code",[e._v("时间分片(time slicing)")]),e._v("和"),a("code",[e._v("暂停(supense)")]),e._v("。")]),e._v(" "),a("blockquote",[a("p",[e._v("如果了解协程的可能会觉得 Fiber 的这种解决方案，跟协程有点像(区别还是很大的)，是可以中断的，可以控制执行顺序。在 JS 里的 generator 其实就是一种协程的使用方式，不过颗粒度更小，可以控制函数里面的代码调用的顺序，也可以中断。")])]),e._v(" "),a("h3",{attrs:{id:"fiber-是如何工作的"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fiber-是如何工作的","aria-hidden":"true"}},[e._v("#")]),e._v(" Fiber 是如何工作的")]),e._v(" "),a("ol",[a("li",[e._v("ReactDOM.render() 和 setState 的时候开始创建更新。")]),e._v(" "),a("li",[e._v("将创建的更新加入任务队列，等待调度。")]),e._v(" "),a("li",[e._v("在 requestIdleCallback 空闲时执行任务。")]),e._v(" "),a("li",[e._v("从根节点开始遍历 Fiber Node，并且构建 WokeInProgress Tree。\n5 生成 effectList。")]),e._v(" "),a("li",[e._v("根据 EffectList 更新 DOM。")])]),e._v(" "),a("p",[e._v("下面是一个详细的执行过程图：\n"),a("img",{attrs:{src:"/imgs/react2.png",alt:""}})]),e._v(" "),a("ol",[a("li",[e._v("第一部分从 "),a("code",[e._v("ReactDOM.render()")]),e._v(" 方法开始，把接收的 "),a("code",[e._v("React Element 转换为 Fiber")]),e._v(" 节点，并为其设置"),a("code",[e._v("优先级")]),e._v("，创建 Update，加入到更新队列，这部分主要是做一些初始数据的准备。")]),e._v(" "),a("li",[e._v("第二部分主要是三个函数："),a("code",[e._v("scheduleWork")]),e._v("、"),a("code",[e._v("requestWork")]),e._v("、"),a("code",[e._v("performWork")]),e._v("，即"),a("code",[e._v("安排工作")]),e._v("、"),a("code",[e._v("申请工作")]),e._v("、"),a("code",[e._v("正式工作")]),e._v("三部曲，React 16 新增的异步调用的功能则在这部分实现，这部分就是 Schedule 阶段，前面介绍的 Cooperative Scheduling 就是在这个阶段，只有在这个解决获取到可执行的时间片，第三部分才会继续执行。具体是如何调度的，后面文章再介绍，这是 React 调度的关键过程。")]),e._v(" "),a("li",[e._v("第三部分是一个大循环，遍历所有的 Fiber 节点，通过 Diff 算法计算所有更新工作，产出 EffectList 给到 commit 阶段使用，这部分的核心是 beginWork 函数，这部分基本就是 Fiber Reconciler ，包括 reconciliation 和 commit 阶段。")])]),e._v(" "),a("h4",{attrs:{id:"fiber-node"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fiber-node","aria-hidden":"true"}},[e._v("#")]),e._v(" Fiber Node")]),e._v(" "),a("p",[e._v("FIber Node，承载了非常关键的上下文信息，可以说是贯彻整个创建和更新的流程，下来分组列了一些重要的 Fiber 字段。")]),e._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("...")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// 跟当前Fiber相关本地状态（比如浏览器环境就是DOM节点）")]),e._v("\n  stateNode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" any"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// 单链表树结构")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("return")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" Fiber "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// 指向他在Fiber节点树中的`parent`，用来在处理完这个节点之后向上返回")]),e._v("\n  child"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" Fiber "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// 指向自己的第一个子节点")]),e._v("\n  sibling"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" Fiber "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// 指向自己的兄弟结构，兄弟节点的return指向同一个父节点")]),e._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// 更新相关")]),e._v("\n  pendingProps"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" any"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// 新的变动带来的新的props")]),e._v("\n  memoizedProps"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" any"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// 上一次渲染完成之后的props")]),e._v("\n  updateQueue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" UpdateQueue"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("any"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// 该Fiber对应的组件产生的Update会存放在这个队列里面")]),e._v("\n  memoizedState"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" any"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// 上一次渲染的时候的state")]),e._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Scheduler 相关")]),e._v("\n  expirationTime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" ExpirationTime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// 代表任务在未来的哪个时间点应该被完成，不包括他的子树产生的任务")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// 快速确定子树中是否有不在等待的变化")]),e._v("\n  childExpirationTime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" ExpirationTime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n\n "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// 在Fiber树更新的过程中，每个Fiber都会有一个跟其对应的Fiber")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// 我们称他为`current <==> workInProgress`")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// 在渲染完成之后他们会交换位置")]),e._v("\n  alternate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" Fiber "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Effect 相关的")]),e._v("\n  effectTag"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" SideEffectTag"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// 用来记录Side Effect")]),e._v("\n  nextEffect"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" Fiber "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// 单链表用来快速查找下一个side effect")]),e._v("\n  firstEffect"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" Fiber "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// 子树中第一个side effect")]),e._v("\n  lastEffect"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" Fiber "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// 子树中最后一个side effect")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("...")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br"),a("span",{staticClass:"line-number"},[e._v("15")]),a("br"),a("span",{staticClass:"line-number"},[e._v("16")]),a("br"),a("span",{staticClass:"line-number"},[e._v("17")]),a("br"),a("span",{staticClass:"line-number"},[e._v("18")]),a("br"),a("span",{staticClass:"line-number"},[e._v("19")]),a("br"),a("span",{staticClass:"line-number"},[e._v("20")]),a("br"),a("span",{staticClass:"line-number"},[e._v("21")]),a("br"),a("span",{staticClass:"line-number"},[e._v("22")]),a("br"),a("span",{staticClass:"line-number"},[e._v("23")]),a("br"),a("span",{staticClass:"line-number"},[e._v("24")]),a("br"),a("span",{staticClass:"line-number"},[e._v("25")]),a("br"),a("span",{staticClass:"line-number"},[e._v("26")]),a("br"),a("span",{staticClass:"line-number"},[e._v("27")]),a("br"),a("span",{staticClass:"line-number"},[e._v("28")]),a("br"),a("span",{staticClass:"line-number"},[e._v("29")]),a("br"),a("span",{staticClass:"line-number"},[e._v("30")]),a("br"),a("span",{staticClass:"line-number"},[e._v("31")]),a("br"),a("span",{staticClass:"line-number"},[e._v("32")]),a("br"),a("span",{staticClass:"line-number"},[e._v("33")]),a("br")])]),a("h4",{attrs:{id:"fiber-reconciler"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fiber-reconciler","aria-hidden":"true"}},[e._v("#")]),e._v(" Fiber Reconciler")]),e._v(" "),a("p",[e._v("在第二部分，进行 Schedule 完，获取到时间片之后，就开始进行 reconcile。")]),e._v(" "),a("p",[e._v("Fiber Reconciler 是 React 里的调和器，这也是任务调度完成之后，如何去执行每个任务，如何去更新每一个节点的过程，对应上面的第三部分。")]),e._v(" "),a("p",[e._v("reconcile 过程分为2个阶段（phase）：")]),e._v(" "),a("p",[e._v("+（可中断）render/reconciliation 通过构造 WorkInProgress Tree 得出 Change。\n+（不可中断）commit 应用这些DOM change。")]),e._v(" "),a("h5",{attrs:{id:"reconciliation-阶段"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reconciliation-阶段","aria-hidden":"true"}},[e._v("#")]),e._v(" reconciliation 阶段")]),e._v(" "),a("p",[e._v("在 reconciliation 阶段的每个工作循环中，每次处理一个 Fiber，处理完可以中断/挂起整个工作循环。通过每个节点更新结束时向上归并 Effect List 来收集任务结果，reconciliation 结束后，根节点的 Effect List里记录了包括 DOM change 在内的所有 Side Effect。")]),e._v(" "),a("p",[e._v("render 阶段可以理解为就是 Diff 的过程，得出 Change(Effect List)，会执行声明如下的声明周期方法：")]),e._v(" "),a("ul",[a("li",[e._v("[UNSAFE_]componentWillMount（弃用）")]),e._v(" "),a("li",[e._v("[UNSAFE_]componentWillReceiveProps（弃用）")]),e._v(" "),a("li",[e._v("getDerivedStateFromProps")]),e._v(" "),a("li",[e._v("shouldComponentUpdate")]),e._v(" "),a("li",[e._v("[UNSAFE_]componentWillUpdate（弃用）")]),e._v(" "),a("li",[e._v("render")])]),e._v(" "),a("p",[e._v("由于 reconciliation 阶段是可中断的，一旦中断之后恢复的时候又会重新执行，所以很可能 reconciliation 阶段的生命周期方法会被多次调用，所以在 reconciliation 阶段的生命周期的方法是不稳定的，我想这也是 React 为什么要废弃 componentWillMount和 componentWillReceiveProps方法而改为静态方法 getDerivedStateFromProps 的原因吧。")]),e._v(" "),a("h5",{attrs:{id:"commit-阶段"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#commit-阶段","aria-hidden":"true"}},[e._v("#")]),e._v(" commit 阶段")]),e._v(" "),a("p",[e._v("commit 阶段可以理解为就是将 Diff 的结果反映到真实 DOM 的过程。")]),e._v(" "),a("p",[e._v("在 commit 阶段，在 commitRoot 里会根据 effect的 effectTag，具体 effectTag 见源码 ，进行对应的插入、更新、删除操作，根据 tag 不同，调用不同的更新方法。")]),e._v(" "),a("p",[e._v("commit 阶段会执行如下的声明周期方法：")]),e._v(" "),a("ul",[a("li",[e._v("getSnapshotBeforeUpdate")]),e._v(" "),a("li",[e._v("componentDidMount")]),e._v(" "),a("li",[e._v("componentDidUpdate")]),e._v(" "),a("li",[e._v("componentWillUnmount")])]),e._v(" "),a("blockquote",[a("p",[e._v("P.S：注意区别 reconciler、reconcile 和 reconciliation，reconciler 是调和器，是一个名词，可以说是 React 工作的一个模块，协调模块；reconcile 是调和器调和的动作，是一个动词；而 reconciliation 只是 reconcile 过程的第一个阶段。")])]),e._v(" "),a("p",[e._v("Fiber Tree 和 WorkInProgress Tree\nReact 在 render 第一次渲染时，会通过 React.createElement 创建一颗 Element 树，可以称之为 Virtual DOM Tree，由于要记录上下文信息，加入了 Fiber，每一个 Element 会对应一个 Fiber Node，将 Fiber Node 链接起来的结构成为 Fiber Tree。它反映了用于渲染 UI 的应用程序的状态。这棵树通常被称为 "),a("code",[e._v("current 树")]),e._v("（当前树，记录当前页面的状态）。")]),e._v(" "),a("p",[e._v("在后续的更新过程中（setState），每次重新渲染都会重新创建 Element, 但是 Fiber 不会，Fiber 只会使用对应的 Element 中的数据来更新自己必要的属性，")]),e._v(" "),a("p",[e._v("Fiber Tree 一个重要的特点是链表结构，将递归遍历编程循环遍历，然后配合 requestIdleCallback API, 实现任务拆分、中断与恢复。")]),e._v(" "),a("p",[e._v("这个链接的结构是怎么构成的呢，这就要主要到之前 Fiber Node 的节点的这几个字段：")]),e._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// 单链表树结构")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("return")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" Fiber "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// 指向父节点")]),e._v("\n   child"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" Fiber "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// 指向自己的第一个子节点")]),e._v("\n   sibling"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" Fiber "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// 指向自己的兄弟结构，兄弟节点的return指向同一个父节点")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br")])]),a("p",[e._v("每一个 Fiber Node 节点与 Virtual Dom 一一对应，所有 Fiber Node 连接起来形成 Fiber tree, 是个单链表树结构，如下图所示：\n"),a("img",{attrs:{src:"/imgs/react3.png",alt:""}})]),e._v(" "),a("p",[e._v("对照图来看，是不是可以知道 Fiber Node 是如何联系起来的呢，Fiber Tree 就是这样一个单链表。")]),e._v(" "),a("p",[e._v("当 render 的时候有了这么一条单链表，当调用 setState 的时候又是如何 Diff 得到 change 的呢？")]),e._v(" "),a("p",[e._v("采用的是一种叫"),a("code",[e._v("双缓冲技术（double buffering）")]),e._v("，这个时候就需要另外一颗树：WorkInProgress Tree，它反映了要刷新到屏幕的未来状态。")]),e._v(" "),a("p",[e._v("WorkInProgress Tree 构造完毕，得到的就是新的 Fiber Tree，然后喜新厌旧（把 current 指针指向WorkInProgress Tree，丢掉旧的 Fiber Tree）就好了。")]),e._v(" "),a("p",[e._v("这样做的好处：")]),e._v(" "),a("ul",[a("li",[e._v("能够复用内部对象（fiber）")]),e._v(" "),a("li",[e._v("节省内存分配、GC的时间开销")]),e._v(" "),a("li",[e._v("就算运行中有错误，也不会影响 View 上的数据")])]),e._v(" "),a("p",[e._v("每个 Fiber上都有个alternate属性，也指向一个 Fiber，创建 WorkInProgress 节点时优先取alternate，没有的话就创建一个。")]),e._v(" "),a("p",[e._v("创建 WorkInProgress Tree 的过程也是一个 Diff 的过程，Diff 完成之后会生成一个 Effect List，这个 Effect List 就是最终 Commit 阶段用来处理副作用的阶段。")])])}),[],!1,null,null,null);t.default=r.exports}}]);