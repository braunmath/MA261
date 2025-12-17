var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "sec-section-name",
  "level": "1",
  "url": "sec-section-name.html",
  "type": "Section",
  "number": "1.1",
  "title": "Introduction to MA 261",
  "body": " Introduction to MA 261  Welcome to MA 261, Intro to Number Theory! This course serves two purposes for students at UK:   Students are introduced to fundamental concepts in elementary number theory, including divisibility, prime numbers, modular arithmetic, approximating real numbers by continued fractions, and Pythagorean triples.    MA 261 is a required course in the UK Math major \"Foundations of Mathematics\" track, in which students learn to read, construct, and critique mathematical proofs, along with learning about the role of proof in mathematics.     In this particular course, we will also explore applications of number theory in music, specifically to the theory of rhythm and the theory of scales and temperament.  First, let's address the elephant in the room: Many students are afraid of, or have had bad previous experiences, with proofs in mathematics.   If you are already comfortable with proofs, that's great! If not, then you are in the right course. This course is intended to help you gain familiarity and skill with proof-based mathematics. The first thing that we will do is to look at a simple theorem in number theory and use it as the basis for a larger conversation about different types of mathematical reasoning, and how those types of mathematical reasoning are reflected in different approaches to proof.  "
},
{
  "id": "123n",
  "level": "1",
  "url": "123n.html",
  "type": "Section",
  "number": "2.1",
  "title": "Mathematics Begins With Questions",
  "body": " Mathematics Begins With Questions  Mathematical reasoning always begins with a question. Most students experience math in school, including in university, as a sequence of answers to questions that they have never heard asked. Don't believe this lie! Mathematics is about wondering, questioning, being curious, and making sense of the world. So let's begin with a question.   What is the value of the sum for different positive integer values of ?    In this class, we will frequently engage in collaborative activities, which we will call checkpoints. Here are the expectations for checkpoints, which will usually either be a problem to solve or a question to discuss:   First, begin the discussion by going around your group and having each person spend 10-seconds sharing an initial strategy for solving the problem, or sharing a answer to the question if it is a discussion question.    Second, go around the group again and give a 10-second follow-up answer. This allows everyone to have a chance to offer their thoughts before the general problem-solving or discussion begins.    Third, as a group, solve the problem or engage in the discussion for the checkpoint.       Discuss with your neighbors:   What qualities would you want to see in a \"good\" answer to the question above?    What are some different approaches that you could use to start trying to answer the question?      "
},
{
  "id": "123n-3",
  "level": "2",
  "url": "123n.html#123n-3",
  "type": "Question",
  "number": "2.1.1",
  "title": "",
  "body": " What is the value of the sum for different positive integer values of ?  "
},
{
  "id": "123n-4",
  "level": "2",
  "url": "123n.html#123n-4",
  "type": "Remark",
  "number": "2.1.2",
  "title": "",
  "body": " In this class, we will frequently engage in collaborative activities, which we will call checkpoints. Here are the expectations for checkpoints, which will usually either be a problem to solve or a question to discuss:   First, begin the discussion by going around your group and having each person spend 10-seconds sharing an initial strategy for solving the problem, or sharing a answer to the question if it is a discussion question.    Second, go around the group again and give a 10-second follow-up answer. This allows everyone to have a chance to offer their thoughts before the general problem-solving or discussion begins.    Third, as a group, solve the problem or engage in the discussion for the checkpoint.     "
},
{
  "id": "123n-5",
  "level": "2",
  "url": "123n.html#123n-5",
  "type": "Checkpoint",
  "number": "2.1.3",
  "title": "",
  "body": " Discuss with your neighbors:   What qualities would you want to see in a \"good\" answer to the question above?    What are some different approaches that you could use to start trying to answer the question?     "
},
{
  "id": "123napproaches",
  "level": "1",
  "url": "123napproaches.html",
  "type": "Section",
  "number": "2.2",
  "title": "Exploration Leads to Conjecture",
  "body": " Exploration Leads to Conjecture  Let's discuss a few useful principles for exploring mathematical questions, which also apply to creating mathematical proofs.    Work out small examples with pencil and paper.     Explore the sum for small values of by computing the sums for . What patterns do you notice, if any?     Draw various pictures or diagrams to visualize the problem, theorem, definition, etc.     Can you draw a picture to represent the sum ? How might such a picture help you understand the problem better?     Use a computer to conduct experiments and generate data.    The software system SageMath is extremely useful for mathematics, and it is built on top of Python, so if you know some Python it is very familiar. A simple SageMath interface is available for free at https:\/\/sagecell.sagemath.org\/ . You can also install SageMath on your computer, or you can use it through a web browser via services such as CoCalc https:\/\/cocalc.com\/ . Here is a simple SageMath command to compute the sum for a given positive integer :  for n in range(1,11): print(n, sum([k for k in range(1, n+1)]))  It is always helpful to try to visualize sequences of numbers, rather than just look at the numerical output. For example, here is code to create a plot of the values for as points of the form .  L = [] for n in range(1,16): L.append([n, sum([k for k in range(1, n+1)])]) points(L,xmax=50,ymax=120)   What type of function does this point plot look like the graph of?   Based on the explorations above, we might conjecture that the sum is given by a quadratic function of . So, suppose that there are constants , , and such that the equality holds for all positive integers . Using the small values we computed earlier for , we can set up a system of equations to solve for , , and . Solving for , and (for example, by back substitution), we find that , so we have the following conjecture.         "
},
{
  "id": "principle-smallexamples",
  "level": "2",
  "url": "123napproaches.html#principle-smallexamples",
  "type": "Principle",
  "number": "2.2.1",
  "title": "",
  "body": "  Work out small examples with pencil and paper.   "
},
{
  "id": "123napproaches-4",
  "level": "2",
  "url": "123napproaches.html#123napproaches-4",
  "type": "Checkpoint",
  "number": "2.2.2",
  "title": "",
  "body": " Explore the sum for small values of by computing the sums for . What patterns do you notice, if any?  "
},
{
  "id": "principle-drawapicture",
  "level": "2",
  "url": "123napproaches.html#principle-drawapicture",
  "type": "Principle",
  "number": "2.2.3",
  "title": "",
  "body": "  Draw various pictures or diagrams to visualize the problem, theorem, definition, etc.   "
},
{
  "id": "123napproaches-6",
  "level": "2",
  "url": "123napproaches.html#123napproaches-6",
  "type": "Checkpoint",
  "number": "2.2.4",
  "title": "",
  "body": " Can you draw a picture to represent the sum ? How might such a picture help you understand the problem better?  "
},
{
  "id": "principle-computationalexperiments",
  "level": "2",
  "url": "123napproaches.html#principle-computationalexperiments",
  "type": "Principle",
  "number": "2.2.5",
  "title": "",
  "body": "  Use a computer to conduct experiments and generate data.   "
},
{
  "id": "123napproaches-12",
  "level": "2",
  "url": "123napproaches.html#123napproaches-12",
  "type": "Checkpoint",
  "number": "2.2.6",
  "title": "",
  "body": " What type of function does this point plot look like the graph of?  "
},
{
  "id": "conj-123nsum",
  "level": "2",
  "url": "123napproaches.html#conj-123nsum",
  "type": "Conjecture",
  "number": "2.2.7",
  "title": "",
  "body": "      "
},
{
  "id": "123nproofs",
  "level": "1",
  "url": "123nproofs.html",
  "type": "Section",
  "number": "2.3",
  "title": "Conjecture Requires Experimental Verification and Proof",
  "body": " Conjecture Requires Experimental Verification and Proof  We have now explored different approaches to understanding the sum for positive integers , and it led us to conjecture that So... what do we do now?    Test conjectures with as many experiments as possible!    Let's put this principle into practice using SageMath by testing our conjecture for the first 10,000 positive integers . for n in range(1,10001): S = sum([k for k in range(1, n+1)]) formula = n*(n+1)\/2 if S != formula: print(\"Conjecture is false at n =\"+str(n)) if n % 1000 == 0: print(\"Conjecture is true up to n=\"+str(n)) This provides stronger evidence that our conjecture is correct, but it is still not a proof.  So, now that we have a conjecture that is supported by experimental evidence, we need to (A) determine if it is actually true and (B) if it is true, we need to give a clear explanation of why it is true. This means we need a mathematical proof. Unfortunately, \"mathematical proof\" is a more complicated topic than one might expect. The standards for what a \"rigorous\" proof is depends on context, audience, and purpose. It also depends on what \"world\" of mathematics you are working in.  In this class, we will rely on a framework developed by David Tall in his book How Humans Learn to Think Mathematically: Exploring the Three Worlds of Mathematics . You will read more about this framework and reflect on it for Essay 1.   David Tall's Three Worlds of Mathematics, from Proof and Proving in Mathematics Education , page 24.   A picture of David Tall's Three Worlds of Mathematics with images and words illustrating the embodied, symbolic, and formal worlds of mathematics.    Our goal is to give three different proofs of our conjecture, one proof representing each of the three worlds of mathematics.  "
},
{
  "id": "principle-testmore",
  "level": "2",
  "url": "123nproofs.html#principle-testmore",
  "type": "Principle",
  "number": "2.3.1",
  "title": "",
  "body": "  Test conjectures with as many experiments as possible!   "
},
{
  "id": "fig-threeworlds",
  "level": "2",
  "url": "123nproofs.html#fig-threeworlds",
  "type": "Figure",
  "number": "2.3.2",
  "title": "",
  "body": " David Tall's Three Worlds of Mathematics, from Proof and Proving in Mathematics Education , page 24.   A picture of David Tall's Three Worlds of Mathematics with images and words illustrating the embodied, symbolic, and formal worlds of mathematics.   "
},
{
  "id": "123nembodied",
  "level": "1",
  "url": "123nembodied.html",
  "type": "Section",
  "number": "2.4",
  "title": "Embodied Proof",
  "body": " Embodied Proof  Here is a description of the embodied world from David Tall's paper \"Building Theories: The Three Worlds of Mathematics\", published in For the Learning of Mathematics in 2004 .   The first [world] grows out of our perceptions of the world and consists of our thinking about things that we perceive and sense, not only in the physical world, but in our own mental world of meaning. By reflection and by the use of increasingly sophisticated language, we can focus on aspects of our sensory experience that enable us to envisage conceptions that no longer exist in the world outside, such as a 'line' that is 'perfectly straight'. I now term this world the 'conceptual-embodied world' or ' embodied world' for short.   Embodied proofs are usually considered \"informal\" by professional mathematicians. Embodied mathematical reasoning is usually not considered sufficiently rigorous for professional mathematical proof in the early 21st century. However, embodied reasoning is often used by professional mathematicians to convey key insights or intuitions that are later made more precise with a formal proof.  Here is a picture that gives an embodied proof of our conjecture, represented for the value . Note that the shaded area is equal to the sum , and that this area is half of the area of a rectangle that is 10 blocks by 11 blocks in size. Therefore, the shaded area is half of the total area, which is The embodied proof of our conjecture is to imagine this picture for any value of .   A 10 by 11 grid illustrating the embodied proof of our conjecture.   A 10 by 11 grid where the squares in the lower left half are shaded.     Discuss this picture. Why is this a proof of the conjecture? Can you see how to generalize this picture to justify that our conjecture is true for any positive integer ?   On the Wikipedia page for the Pythagorean Theorem, there are many examples of visual proofs, which fall within the embodied category of proof. Let's look at one of these: rearrangement proofs .   Does this proof make sense? Why or why not? Does it convince you that the Pythagorean Theorem holds for every right triangle? Why or why not?   "
},
{
  "id": "fig-embodied123nsum",
  "level": "2",
  "url": "123nembodied.html#fig-embodied123nsum",
  "type": "Figure",
  "number": "2.4.1",
  "title": "",
  "body": " A 10 by 11 grid illustrating the embodied proof of our conjecture.   A 10 by 11 grid where the squares in the lower left half are shaded.   "
},
{
  "id": "123nembodied-7",
  "level": "2",
  "url": "123nembodied.html#123nembodied-7",
  "type": "Checkpoint",
  "number": "2.4.2",
  "title": "",
  "body": " Discuss this picture. Why is this a proof of the conjecture? Can you see how to generalize this picture to justify that our conjecture is true for any positive integer ?  "
},
{
  "id": "123nembodied-9",
  "level": "2",
  "url": "123nembodied.html#123nembodied-9",
  "type": "Checkpoint",
  "number": "2.4.3",
  "title": "",
  "body": " Does this proof make sense? Why or why not? Does it convince you that the Pythagorean Theorem holds for every right triangle? Why or why not?  "
},
{
  "id": "123nsymbolic",
  "level": "1",
  "url": "123nsymbolic.html",
  "type": "Section",
  "number": "2.5",
  "title": "Symbolic Proof",
  "body": " Symbolic Proof  Here is a description of the symbolic world from David Tall's paper \"Building Theories: The Three Worlds of Mathematics\", published in For the Learning of Mathematics in 2004 .   The second world is the world of symbols that we use for calculation and manipulation in arithmetic, algebra, calculus and so on. These begin with actions (such as pointing and counting) that are encapsulated as concepts by using symbols that allow us to switch effortlessly from processes to do mathematics, to concepts to think about... The initial stages of counting and early arithmetic are largely embodied. But the focus on the properties of the symbols and the relationship between them moves away from the physical meaning to a symbolic activity in arithmetic. This becomes increasingly sophisticated, with the introduction of more sophisticated number concepts (fractions, negatives, rationals, irrationals, infinite decimals, complex numbers, vectors in two and three, then n dimensions, and so on) that enable us to calculate and manipulate symbols with great accuracy and precision.   An example of an embodied-symbolic proof of our conjecture for is the following. Take two copies of our sum and add them together, but place one copy on top of the other, with the second set of summands appearing in the opposite order: When these two sums are added together, the summands pair to produce the sum of six copies of . Thus, the initial sum, , must be half of this total, is equal to half of , which is .  This proof is embodied because it relies on visualizing the two sums being added together in this way, and because it relies on the physical action of pairing the summands. It is symbolic because it relies on manipulating the symbols of addition and equality to arrive at the conclusion.   Discuss the proof above. Does it make sense? Why or why not?   Next, let's look at a more general version of this proof that would be considered symbolic . When writing a proof that is more symbolic or formal (which we will discuss next), we usually will place our argument in a proof environment that begins with the word \"Proof\" and ends with either a small box symbol or the letters \"QED\" (which stands for the Latin phrase quod erat demonstrandum , meaning \"which was to be demonstrated\"). This is what you should do when writing your own symbolic and\/or formal proofs.  In the proof below, we will use the sigma notation for sums. Remember that the notation means to sum the terms . Using this notation, our conjecture can be written as    Proof of  We write the sum twice, once in the usual order and once in reverse order, and add them together: Therefore, the equation above gives from which it follows that     Discuss this proof. Does it make sense? Why or why not?    Which of the three proofs (embodied, embodied-symbolic, and symbolic) that we have seen so far do you prefer? Why? Which of these proofs most makes you believe that our conjecture is true? Why?   If you want to see another example of a symbolic proof, look at the proof of the Pythagorean Theorem using similar triangles on Wikipedia. You can see that this proof feels different and requires a different type of reasoning from the embodied proof using rearrangement that we saw earlier.  "
},
{
  "id": "123nsymbolic-6",
  "level": "2",
  "url": "123nsymbolic.html#123nsymbolic-6",
  "type": "Checkpoint",
  "number": "2.5.1",
  "title": "",
  "body": " Discuss the proof above. Does it make sense? Why or why not?  "
},
{
  "id": "123nsymbolic-9",
  "level": "2",
  "url": "123nsymbolic.html#123nsymbolic-9",
  "type": "Proof",
  "number": "2.5.1",
  "title": "Proof of Conjecture 2.2.7.",
  "body": " Proof of  We write the sum twice, once in the usual order and once in reverse order, and add them together: Therefore, the equation above gives from which it follows that   "
},
{
  "id": "123nsymbolic-10",
  "level": "2",
  "url": "123nsymbolic.html#123nsymbolic-10",
  "type": "Checkpoint",
  "number": "2.5.2",
  "title": "",
  "body": " Discuss this proof. Does it make sense? Why or why not?  "
},
{
  "id": "123nsymbolic-11",
  "level": "2",
  "url": "123nsymbolic.html#123nsymbolic-11",
  "type": "Checkpoint",
  "number": "2.5.3",
  "title": "",
  "body": " Which of the three proofs (embodied, embodied-symbolic, and symbolic) that we have seen so far do you prefer? Why? Which of these proofs most makes you believe that our conjecture is true? Why?  "
},
{
  "id": "123nformal",
  "level": "1",
  "url": "123nformal.html",
  "type": "Section",
  "number": "2.6",
  "title": "Formal Proof",
  "body": " Formal Proof  The final world of mathematics is the formal world, which is described as follows by David Tall in his paper \"Building Theories: The Three Worlds of Mathematics\", published in For the Learning of Mathematics in 2004 .   The third world is based on properties , expressed in terms of formal definitions that are used as axioms to specify mathematical structures (such as 'group', 'field', 'vector space', 'topological space' and so on). This world I have called the 'formal-axiomatic world' or ' formal world', for short. It turns previous experiences on their heads, working not with familiar objects of experience, but with axioms that are carefully formulated to define mathematical structures in terms of specified properties. Other properties are then deduced by formal proof to build a sequence of theorems. Within the axiomatic system, new concepts can be defined and their properties deduced to build a coherent, logically deduced theory.   One of the first formal proof methods that students usually learn is called mathematical induction . There are various flavors of induction, including the \"method of descent\", \"strong induction\", \"weak induction\", etc. We will continue to discuss various aspects of these distinctions, but what is more important than learning names is to learn and understand the key idea of induction:   verify small cases, then use those small cases to verify the next case, then use that new case to verify the next case, then use that new case to verify the next case, and then carefully explain why you can always continue this process for a specific problem or proof.     We will begin by considering an example of an embodied inductive proof. The question that will motivate us is the following.    Consider any map formed by drawing straight lines in the plane, each line extending infinitely in both directions, to represent the boundaries of the regions. Some regions will be compact and bounded, others will be unbounded and go off to infinity. Is it always possible to color the regions using only two colors, say white and gray, in such a way that white and gray regions never share an edge? In other words, the edges between regions always have white on one side and gray on the other side. If yes, why? If no, why not?     Work on this problem with your group. Do you think the answer is \"yes, it is always possible\" or \"no, it is not always possible\"? Try to come up with a convincing argument to support your answer.     The answer to is yes.     We will prove by mathematical induction on the number of lines, . For the base case, when , there are two regions separated by a single line. We can color one region white and the other gray, so the base case holds.  Next, we prove the inductive step. Assume that for some arbitrary value , any map formed by lines can be colored using only two colors so that no two adjacent regions share the same color. Now, consider a map formed by lines. We can think of this map as being formed by first drawing lines, and then adding one additional line. By our inductive hypothesis, we can color the regions formed by the first lines using only two colors. Now, when we add the st line, it will intersect some of the existing regions, dividing them into two new regions. To ensure that no two adjacent regions share the same color, we can simply switch the colors of all the regions on one side of the new line. This way, the regions on either side of the new line will have different colors, and the coloring of the other regions remains the same. Further, none of the adjacent regions have the same color.    Discuss this proof. Does it make sense? Why or why not?   Now, let's give an inductive proof of our original conjecture that is within the world of formal mathematics.   Proof of  We use induction. For the base case, when , we have so the base case holds.  For the inductive step, assume that for some arbitrary value , we have We need to show that this implies that Starting from the left-hand side, we have This completes the inductive step, and therefore our proof by induction is complete.    Discuss this proof. Does it make sense? Why or why not? What is the most confusing part? Why is it confusing?   These two proofs demonstrate how you can use a small number of initial data points to make a conjecture, then look at how the structure of the problem leads you to use the same pattern of logical argument repeatedly. This \"pattern of logical argument\" is the inductive step of an induction argument, while the small initial data points are the base cases of the inductive argument. We are now in a position to give a precise statement of the principle of mathematical induction.   Principle of Mathematical Induction   Suppose we have a sequence of mathematical statements (one for each natural number). If the following two properties hold, then is true for every natural number :   The base case : is true.    The induction step : If is true, then is true.       "
},
{
  "id": "ques-twocolorregions",
  "level": "2",
  "url": "123nformal.html#ques-twocolorregions",
  "type": "Question",
  "number": "2.6.1",
  "title": "",
  "body": "  Consider any map formed by drawing straight lines in the plane, each line extending infinitely in both directions, to represent the boundaries of the regions. Some regions will be compact and bounded, others will be unbounded and go off to infinity. Is it always possible to color the regions using only two colors, say white and gray, in such a way that white and gray regions never share an edge? In other words, the edges between regions always have white on one side and gray on the other side. If yes, why? If no, why not?   "
},
{
  "id": "123nformal-7",
  "level": "2",
  "url": "123nformal.html#123nformal-7",
  "type": "Checkpoint",
  "number": "2.6.2",
  "title": "",
  "body": " Work on this problem with your group. Do you think the answer is \"yes, it is always possible\" or \"no, it is not always possible\"? Try to come up with a convincing argument to support your answer.  "
},
{
  "id": "thm-twocolors",
  "level": "2",
  "url": "123nformal.html#thm-twocolors",
  "type": "Theorem",
  "number": "2.6.3",
  "title": "",
  "body": "  The answer to is yes.   "
},
{
  "id": "123nformal-9",
  "level": "2",
  "url": "123nformal.html#123nformal-9",
  "type": "Proof",
  "number": "2.6.1",
  "title": "",
  "body": " We will prove by mathematical induction on the number of lines, . For the base case, when , there are two regions separated by a single line. We can color one region white and the other gray, so the base case holds.  Next, we prove the inductive step. Assume that for some arbitrary value , any map formed by lines can be colored using only two colors so that no two adjacent regions share the same color. Now, consider a map formed by lines. We can think of this map as being formed by first drawing lines, and then adding one additional line. By our inductive hypothesis, we can color the regions formed by the first lines using only two colors. Now, when we add the st line, it will intersect some of the existing regions, dividing them into two new regions. To ensure that no two adjacent regions share the same color, we can simply switch the colors of all the regions on one side of the new line. This way, the regions on either side of the new line will have different colors, and the coloring of the other regions remains the same. Further, none of the adjacent regions have the same color.  "
},
{
  "id": "123nformal-10",
  "level": "2",
  "url": "123nformal.html#123nformal-10",
  "type": "Checkpoint",
  "number": "2.6.4",
  "title": "",
  "body": " Discuss this proof. Does it make sense? Why or why not?  "
},
{
  "id": "123nformal-12",
  "level": "2",
  "url": "123nformal.html#123nformal-12",
  "type": "Proof",
  "number": "2.6.2",
  "title": "Proof of Conjecture 2.2.7.",
  "body": " Proof of  We use induction. For the base case, when , we have so the base case holds.  For the inductive step, assume that for some arbitrary value , we have We need to show that this implies that Starting from the left-hand side, we have This completes the inductive step, and therefore our proof by induction is complete.  "
},
{
  "id": "123nformal-13",
  "level": "2",
  "url": "123nformal.html#123nformal-13",
  "type": "Checkpoint",
  "number": "2.6.5",
  "title": "",
  "body": " Discuss this proof. Does it make sense? Why or why not? What is the most confusing part? Why is it confusing?  "
},
{
  "id": "principle-induction",
  "level": "2",
  "url": "123nformal.html#principle-induction",
  "type": "Principle",
  "number": "2.6.6",
  "title": "Principle of Mathematical Induction.",
  "body": " Principle of Mathematical Induction   Suppose we have a sequence of mathematical statements (one for each natural number). If the following two properties hold, then is true for every natural number :   The base case : is true.    The induction step : If is true, then is true.      "
},
{
  "id": "prime-numbers",
  "level": "1",
  "url": "prime-numbers.html",
  "type": "Section",
  "number": "3.1",
  "title": "Prime Numbers",
  "body": " Prime Numbers    "
},
{
  "id": "divisionalgorithm",
  "level": "1",
  "url": "divisionalgorithm.html",
  "type": "Section",
  "number": "4.1",
  "title": "The Division Algorithm",
  "body": " The Division Algorithm    "
},
{
  "id": "equivalencerelations",
  "level": "1",
  "url": "equivalencerelations.html",
  "type": "Section",
  "number": "5.1",
  "title": "Equivalence Relations",
  "body": " Equivalence Relations    "
},
{
  "id": "continuedfractions",
  "level": "1",
  "url": "continuedfractions.html",
  "type": "Section",
  "number": "6.1",
  "title": "Continued Fractions",
  "body": " Continued Fractions    "
},
{
  "id": "pythagoreantheorem",
  "level": "1",
  "url": "pythagoreantheorem.html",
  "type": "Section",
  "number": "7.1",
  "title": "The Pythagorean Theorem",
  "body": " The Pythagorean Theorem    "
},
{
  "id": "problems",
  "level": "1",
  "url": "problems.html",
  "type": "Chapter",
  "number": "8",
  "title": "Problems and Essays",
  "body": " Problems and Essays   Essay 1  Go to and download the book Proof and Proving in Mathematics Education . Your essay will be a response to parts of Chapter 2, titled \"Cognitive Development of Proof\". Read the following sections of this chapter:   Section 2, \"Perceptions of Proof\", including both Subsections 2.1 and 2.2, page numbers 14-16.    Subsection 3.3, \"A Global Framework for the Development of Mathematical Thinking\", page numbers 23-25.   After you read these sections, complete the following essay.   This will be an essay of length at least 500 words, which is equivalent to at least 2 typed pages with 1 inch margins, 12 point Times New Roman font, double spaced. (You can write a longer essay if needed.)    Your essay should respond to the following three questions.   What are 2-3 experiences you have with mathematical proofs in your previous mathematics courses (both high school and college)? How do these experiences relate to the discussion of proof for mathematicians and for growing individuals discussed in Section 2 of the article?    What are examples of work you have done in your previous mathematics courses that represent \"embodied\", \"symbolic\", and \"formal\" modes of mathematical thinking, as described in Subsection 3.3 of the article?    What is one thing that you read in these sections that made sense to you? Why? What is one thing that you read in these sections that did not make sense to you? Why was it confusing? What questions do you have about it?      Your grade is based on completion only (in other words, if you complete the assignment and it meets the length requirement and responds appropriately to the prompt, then you get full credit).    P1  For a real number , define the floor function  to be the greatest integer less than or equal to . For example, , , and .  Let and be positive integers. Explain why the number of multiples of between and (inclusive) is given by .  Hint: Before you start writing your explanation, work out several examples with specific numbers. What do those examples suggest about how to give a clear explanation for arbitrary values of and ?    P2  Consider the equation    Draw a picture that demonstrates why this is true for all positive integers . (This is an \"embodied\" proof.)    Give a \"symbolic\" proof of this equation by rewriting the numbers in the sum and using properties of sums that we have discussed in class. Note: You should not use induction for this part, even if you know how to do so.    Hint: As with the previous problem, begin with small examples. What happens when ? How can you use these examples to guide your thinking about the general case?     P3      P4      P5      Essay 2  Watch the following video from 3Blue1Brown (19 minutes, published July 2023): After you watch this video, complete the following essay.   This will be an essay of length 500 words, which is equivalent to 2 typed pages with 1 inch margins, 12 point Times New Roman font, double spaced.    The video introduced three false proofs, one related to spherical surface area, one related to finding the value of , and one supposedly proving that all triangles are equilateral. Which of these three false proofs did you find most interesting, and why? Which of these three false proofs did you find least interesting, and why? You need to give specific details in the video that support your opinions.    What is something about mathematical proof that this video made you consider that you had not thought of before? Do you feel that this new insight will help you as you work on proofs in this course? Why or why not?    How are the ideas of the embodied, symbolic, and formal modes of mathematical thinking (from the reading for Essay 1) related to the ideas introduced in this video? Does this video make you think differently about these modes of mathematical thinking? Why or why not?   Your grade is based on completion only (in other words, if you complete the assignment and it meets the length requirement and responds appropriately to the prompt, then you get full credit).    P6      P7      P8      P9      P10      P11      P12      P13      P14      P15      P16      P17      Essay 3  Read the following blog post by Keith Weber, a professor of math education at Rutgers University who studies how undergraduate students understand proofs in mathematics: After you read this article, complete the following essay.   This will be an essay of length at least 500 words, which is equivalent to at least 2 typed pages with 1 inch margins, 12 point Times New Roman font, double spaced. (You can write a longer essay if needed.)    Your essay should respond to the following three questions.   The article describes four expectations that professors have for students, but which are usually mis-communicated. For each of these four expectations , do you respond more like the students in their surveys, or more like the professors? Why?    The discussion at the end of the article has some recommendations for faculty in their courses. Which of these recommendations do you think you would find most helpful for your learning, and why?    What is one thing you might change about your approach to your math courses after reading this article? Why is this the thing you would choose to change?      Your grade is based on completion only (in other words, if you complete the assignment and it meets the length requirement and responds appropriately to the prompt, then you get full credit).    P18      P19      P20      P21      P22      P23      Essay 4  Watch the following YouTube video from Quanta Magazine (17 minutes, published January 2021): After you watch this video, complete the following essay.   This will be an essay of length 500 words, which is equivalent to 2 typed pages with 1 inch margins, 12 point Times New Roman font, double spaced.    Write a critical review of this video. Imagine that you are writing your review for a journal for undergraduates in mathematics and the sciences, so your primary audience is undergraduate math\/cs\/engineering\/etc majors and minors.    Like any critic, you will respond positively to some things and negatively to others. Unlike many critics, you need to justify your opinions and provide detailed explanations for your claims.    You should consider the following questions:    Does the video effectively communicate the mathematics it discusses? Why or why not? Justify your claims with specific details about the video.    We have discussed multiple approaches\/themes to prime numbers in this course. Which of these approaches\/themes to prime numbers are used in this video? Be detailed, give specific examples from the video!    Is the mathematics clearly explained? If yes, what did they do especially well? If no, what made it unclear? Again, justify your claims with specific examples from the video.   Your grade is based on completion only (in other words, if you complete the assignment and it meets the length requirement and responds appropriately to the prompt, then you get full credit).    P24      P25      P26      Essay 5  Read the course syllabus on the Canvas homepage for MA 261. After you read the syllabus, complete the following essay.   This will be an essay of length at least 500 words, which is equivalent to at least 2 typed pages with 1 inch margins, 12 point Times New Roman font, double spaced. (You can write a longer essay if needed.)    Your essay should respond to the following three questions.   So far we have investigated multiple topics and techniques in number theory. Which of these have you enjoyed the most? Which have you enjoyed the least? Why? Give specific examples from the homework and\/or notes to illustrate your opinions.    The student learning outcomes list various mathematical practices that students will develop in MA 261, in addition to the content-based learning outcomes. Which of these practices do you feel you have improved on the most so far this semester? Which do you are most in need of further development?      Your grade is based on completion only (in other words, if you complete the assignment and it meets the length requirement and responds appropriately to the prompt, then you get full credit).    P27      P28      P29      P30      P31      P32      Essay 6      P33      P34      P35      P36      P37      P38      P39      P40      End-of-Class Reflection  Type a 1000 word essay in response to the following prompt. This is the equivalent of 4 pages in 12 point Times New Roman font, double-spaced.   What were six of the most important discoveries or realizations you made in this class? In other words, what are you taking away from this class that you think might stick with you over time and\/or influence you in the future? What have you experienced that might have a long-term effect on you intellectually or personally? These can include things you had not realized about mathematics or society, specific homework problems or theorems, etc. These can be things that made sense to you, or topics where you were confused, points that you agreed\/disagreed with in the readings or class discussions, issues that arose while working on your assignments, etc.    Explain why these six discoveries or realizations are important to you.    You should include a combination of observations about both mathematics and your habits, practices, and beliefs about mathematics.   This assignment grade is based only on completion (i.e. if you turn it in, it meets the length requirement, and it appropriately responds to the prompt above, then you get full credit).   "
},
{
  "id": "problems-2",
  "level": "2",
  "url": "problems.html#problems-2",
  "type": "Problem",
  "number": "8.0.1",
  "title": "Essay 1.",
  "body": " Essay 1  Go to and download the book Proof and Proving in Mathematics Education . Your essay will be a response to parts of Chapter 2, titled \"Cognitive Development of Proof\". Read the following sections of this chapter:   Section 2, \"Perceptions of Proof\", including both Subsections 2.1 and 2.2, page numbers 14-16.    Subsection 3.3, \"A Global Framework for the Development of Mathematical Thinking\", page numbers 23-25.   After you read these sections, complete the following essay.   This will be an essay of length at least 500 words, which is equivalent to at least 2 typed pages with 1 inch margins, 12 point Times New Roman font, double spaced. (You can write a longer essay if needed.)    Your essay should respond to the following three questions.   What are 2-3 experiences you have with mathematical proofs in your previous mathematics courses (both high school and college)? How do these experiences relate to the discussion of proof for mathematicians and for growing individuals discussed in Section 2 of the article?    What are examples of work you have done in your previous mathematics courses that represent \"embodied\", \"symbolic\", and \"formal\" modes of mathematical thinking, as described in Subsection 3.3 of the article?    What is one thing that you read in these sections that made sense to you? Why? What is one thing that you read in these sections that did not make sense to you? Why was it confusing? What questions do you have about it?      Your grade is based on completion only (in other words, if you complete the assignment and it meets the length requirement and responds appropriately to the prompt, then you get full credit).  "
},
{
  "id": "problems-3",
  "level": "2",
  "url": "problems.html#problems-3",
  "type": "Problem",
  "number": "8.0.2",
  "title": "P1.",
  "body": " P1  For a real number , define the floor function  to be the greatest integer less than or equal to . For example, , , and .  Let and be positive integers. Explain why the number of multiples of between and (inclusive) is given by .  Hint: Before you start writing your explanation, work out several examples with specific numbers. What do those examples suggest about how to give a clear explanation for arbitrary values of and ?  "
},
{
  "id": "problems-4",
  "level": "2",
  "url": "problems.html#problems-4",
  "type": "Problem",
  "number": "8.0.3",
  "title": "P2.",
  "body": " P2  Consider the equation    Draw a picture that demonstrates why this is true for all positive integers . (This is an \"embodied\" proof.)    Give a \"symbolic\" proof of this equation by rewriting the numbers in the sum and using properties of sums that we have discussed in class. Note: You should not use induction for this part, even if you know how to do so.    Hint: As with the previous problem, begin with small examples. What happens when ? How can you use these examples to guide your thinking about the general case?   "
},
{
  "id": "problems-5",
  "level": "2",
  "url": "problems.html#problems-5",
  "type": "Problem",
  "number": "8.0.4",
  "title": "P3.",
  "body": " P3    "
},
{
  "id": "problems-6",
  "level": "2",
  "url": "problems.html#problems-6",
  "type": "Problem",
  "number": "8.0.5",
  "title": "P4.",
  "body": " P4    "
},
{
  "id": "problems-7",
  "level": "2",
  "url": "problems.html#problems-7",
  "type": "Problem",
  "number": "8.0.6",
  "title": "P5.",
  "body": " P5    "
},
{
  "id": "problems-8",
  "level": "2",
  "url": "problems.html#problems-8",
  "type": "Problem",
  "number": "8.0.7",
  "title": "Essay 2.",
  "body": " Essay 2  Watch the following video from 3Blue1Brown (19 minutes, published July 2023): After you watch this video, complete the following essay.   This will be an essay of length 500 words, which is equivalent to 2 typed pages with 1 inch margins, 12 point Times New Roman font, double spaced.    The video introduced three false proofs, one related to spherical surface area, one related to finding the value of , and one supposedly proving that all triangles are equilateral. Which of these three false proofs did you find most interesting, and why? Which of these three false proofs did you find least interesting, and why? You need to give specific details in the video that support your opinions.    What is something about mathematical proof that this video made you consider that you had not thought of before? Do you feel that this new insight will help you as you work on proofs in this course? Why or why not?    How are the ideas of the embodied, symbolic, and formal modes of mathematical thinking (from the reading for Essay 1) related to the ideas introduced in this video? Does this video make you think differently about these modes of mathematical thinking? Why or why not?   Your grade is based on completion only (in other words, if you complete the assignment and it meets the length requirement and responds appropriately to the prompt, then you get full credit).  "
},
{
  "id": "problems-9",
  "level": "2",
  "url": "problems.html#problems-9",
  "type": "Problem",
  "number": "8.0.8",
  "title": "P6.",
  "body": " P6    "
},
{
  "id": "problems-10",
  "level": "2",
  "url": "problems.html#problems-10",
  "type": "Problem",
  "number": "8.0.9",
  "title": "P7.",
  "body": " P7    "
},
{
  "id": "problems-11",
  "level": "2",
  "url": "problems.html#problems-11",
  "type": "Problem",
  "number": "8.0.10",
  "title": "P8.",
  "body": " P8    "
},
{
  "id": "problems-12",
  "level": "2",
  "url": "problems.html#problems-12",
  "type": "Problem",
  "number": "8.0.11",
  "title": "P9.",
  "body": " P9    "
},
{
  "id": "problems-13",
  "level": "2",
  "url": "problems.html#problems-13",
  "type": "Problem",
  "number": "8.0.12",
  "title": "P10.",
  "body": " P10    "
},
{
  "id": "problems-14",
  "level": "2",
  "url": "problems.html#problems-14",
  "type": "Problem",
  "number": "8.0.13",
  "title": "P11.",
  "body": " P11    "
},
{
  "id": "problems-15",
  "level": "2",
  "url": "problems.html#problems-15",
  "type": "Problem",
  "number": "8.0.14",
  "title": "P12.",
  "body": " P12    "
},
{
  "id": "problems-16",
  "level": "2",
  "url": "problems.html#problems-16",
  "type": "Problem",
  "number": "8.0.15",
  "title": "P13.",
  "body": " P13    "
},
{
  "id": "problems-17",
  "level": "2",
  "url": "problems.html#problems-17",
  "type": "Problem",
  "number": "8.0.16",
  "title": "P14.",
  "body": " P14    "
},
{
  "id": "problems-18",
  "level": "2",
  "url": "problems.html#problems-18",
  "type": "Problem",
  "number": "8.0.17",
  "title": "P15.",
  "body": " P15    "
},
{
  "id": "problems-19",
  "level": "2",
  "url": "problems.html#problems-19",
  "type": "Problem",
  "number": "8.0.18",
  "title": "P16.",
  "body": " P16    "
},
{
  "id": "problems-20",
  "level": "2",
  "url": "problems.html#problems-20",
  "type": "Problem",
  "number": "8.0.19",
  "title": "P17.",
  "body": " P17    "
},
{
  "id": "problems-21",
  "level": "2",
  "url": "problems.html#problems-21",
  "type": "Problem",
  "number": "8.0.20",
  "title": "Essay 3.",
  "body": " Essay 3  Read the following blog post by Keith Weber, a professor of math education at Rutgers University who studies how undergraduate students understand proofs in mathematics: After you read this article, complete the following essay.   This will be an essay of length at least 500 words, which is equivalent to at least 2 typed pages with 1 inch margins, 12 point Times New Roman font, double spaced. (You can write a longer essay if needed.)    Your essay should respond to the following three questions.   The article describes four expectations that professors have for students, but which are usually mis-communicated. For each of these four expectations , do you respond more like the students in their surveys, or more like the professors? Why?    The discussion at the end of the article has some recommendations for faculty in their courses. Which of these recommendations do you think you would find most helpful for your learning, and why?    What is one thing you might change about your approach to your math courses after reading this article? Why is this the thing you would choose to change?      Your grade is based on completion only (in other words, if you complete the assignment and it meets the length requirement and responds appropriately to the prompt, then you get full credit).  "
},
{
  "id": "problems-22",
  "level": "2",
  "url": "problems.html#problems-22",
  "type": "Problem",
  "number": "8.0.21",
  "title": "P18.",
  "body": " P18    "
},
{
  "id": "problems-23",
  "level": "2",
  "url": "problems.html#problems-23",
  "type": "Problem",
  "number": "8.0.22",
  "title": "P19.",
  "body": " P19    "
},
{
  "id": "problems-24",
  "level": "2",
  "url": "problems.html#problems-24",
  "type": "Problem",
  "number": "8.0.23",
  "title": "P20.",
  "body": " P20    "
},
{
  "id": "problems-25",
  "level": "2",
  "url": "problems.html#problems-25",
  "type": "Problem",
  "number": "8.0.24",
  "title": "P21.",
  "body": " P21    "
},
{
  "id": "problems-26",
  "level": "2",
  "url": "problems.html#problems-26",
  "type": "Problem",
  "number": "8.0.25",
  "title": "P22.",
  "body": " P22    "
},
{
  "id": "problems-27",
  "level": "2",
  "url": "problems.html#problems-27",
  "type": "Problem",
  "number": "8.0.26",
  "title": "P23.",
  "body": " P23    "
},
{
  "id": "problems-28",
  "level": "2",
  "url": "problems.html#problems-28",
  "type": "Problem",
  "number": "8.0.27",
  "title": "Essay 4.",
  "body": " Essay 4  Watch the following YouTube video from Quanta Magazine (17 minutes, published January 2021): After you watch this video, complete the following essay.   This will be an essay of length 500 words, which is equivalent to 2 typed pages with 1 inch margins, 12 point Times New Roman font, double spaced.    Write a critical review of this video. Imagine that you are writing your review for a journal for undergraduates in mathematics and the sciences, so your primary audience is undergraduate math\/cs\/engineering\/etc majors and minors.    Like any critic, you will respond positively to some things and negatively to others. Unlike many critics, you need to justify your opinions and provide detailed explanations for your claims.    You should consider the following questions:    Does the video effectively communicate the mathematics it discusses? Why or why not? Justify your claims with specific details about the video.    We have discussed multiple approaches\/themes to prime numbers in this course. Which of these approaches\/themes to prime numbers are used in this video? Be detailed, give specific examples from the video!    Is the mathematics clearly explained? If yes, what did they do especially well? If no, what made it unclear? Again, justify your claims with specific examples from the video.   Your grade is based on completion only (in other words, if you complete the assignment and it meets the length requirement and responds appropriately to the prompt, then you get full credit).  "
},
{
  "id": "problems-29",
  "level": "2",
  "url": "problems.html#problems-29",
  "type": "Problem",
  "number": "8.0.28",
  "title": "P24.",
  "body": " P24    "
},
{
  "id": "problems-30",
  "level": "2",
  "url": "problems.html#problems-30",
  "type": "Problem",
  "number": "8.0.29",
  "title": "P25.",
  "body": " P25    "
},
{
  "id": "problems-31",
  "level": "2",
  "url": "problems.html#problems-31",
  "type": "Problem",
  "number": "8.0.30",
  "title": "P26.",
  "body": " P26    "
},
{
  "id": "problems-32",
  "level": "2",
  "url": "problems.html#problems-32",
  "type": "Problem",
  "number": "8.0.31",
  "title": "Essay 5.",
  "body": " Essay 5  Read the course syllabus on the Canvas homepage for MA 261. After you read the syllabus, complete the following essay.   This will be an essay of length at least 500 words, which is equivalent to at least 2 typed pages with 1 inch margins, 12 point Times New Roman font, double spaced. (You can write a longer essay if needed.)    Your essay should respond to the following three questions.   So far we have investigated multiple topics and techniques in number theory. Which of these have you enjoyed the most? Which have you enjoyed the least? Why? Give specific examples from the homework and\/or notes to illustrate your opinions.    The student learning outcomes list various mathematical practices that students will develop in MA 261, in addition to the content-based learning outcomes. Which of these practices do you feel you have improved on the most so far this semester? Which do you are most in need of further development?      Your grade is based on completion only (in other words, if you complete the assignment and it meets the length requirement and responds appropriately to the prompt, then you get full credit).  "
},
{
  "id": "problems-33",
  "level": "2",
  "url": "problems.html#problems-33",
  "type": "Problem",
  "number": "8.0.32",
  "title": "P27.",
  "body": " P27    "
},
{
  "id": "problems-34",
  "level": "2",
  "url": "problems.html#problems-34",
  "type": "Problem",
  "number": "8.0.33",
  "title": "P28.",
  "body": " P28    "
},
{
  "id": "problems-35",
  "level": "2",
  "url": "problems.html#problems-35",
  "type": "Problem",
  "number": "8.0.34",
  "title": "P29.",
  "body": " P29    "
},
{
  "id": "problems-36",
  "level": "2",
  "url": "problems.html#problems-36",
  "type": "Problem",
  "number": "8.0.35",
  "title": "P30.",
  "body": " P30    "
},
{
  "id": "problems-37",
  "level": "2",
  "url": "problems.html#problems-37",
  "type": "Problem",
  "number": "8.0.36",
  "title": "P31.",
  "body": " P31    "
},
{
  "id": "problems-38",
  "level": "2",
  "url": "problems.html#problems-38",
  "type": "Problem",
  "number": "8.0.37",
  "title": "P32.",
  "body": " P32    "
},
{
  "id": "problems-39",
  "level": "2",
  "url": "problems.html#problems-39",
  "type": "Problem",
  "number": "8.0.38",
  "title": "Essay 6.",
  "body": " Essay 6    "
},
{
  "id": "problems-40",
  "level": "2",
  "url": "problems.html#problems-40",
  "type": "Problem",
  "number": "8.0.39",
  "title": "P33.",
  "body": " P33    "
},
{
  "id": "problems-41",
  "level": "2",
  "url": "problems.html#problems-41",
  "type": "Problem",
  "number": "8.0.40",
  "title": "P34.",
  "body": " P34    "
},
{
  "id": "problems-42",
  "level": "2",
  "url": "problems.html#problems-42",
  "type": "Problem",
  "number": "8.0.41",
  "title": "P35.",
  "body": " P35    "
},
{
  "id": "problems-43",
  "level": "2",
  "url": "problems.html#problems-43",
  "type": "Problem",
  "number": "8.0.42",
  "title": "P36.",
  "body": " P36    "
},
{
  "id": "problems-44",
  "level": "2",
  "url": "problems.html#problems-44",
  "type": "Problem",
  "number": "8.0.43",
  "title": "P37.",
  "body": " P37    "
},
{
  "id": "problems-45",
  "level": "2",
  "url": "problems.html#problems-45",
  "type": "Problem",
  "number": "8.0.44",
  "title": "P38.",
  "body": " P38    "
},
{
  "id": "problems-46",
  "level": "2",
  "url": "problems.html#problems-46",
  "type": "Problem",
  "number": "8.0.45",
  "title": "P39.",
  "body": " P39    "
},
{
  "id": "problems-47",
  "level": "2",
  "url": "problems.html#problems-47",
  "type": "Problem",
  "number": "8.0.46",
  "title": "P40.",
  "body": " P40    "
},
{
  "id": "problems-48",
  "level": "2",
  "url": "problems.html#problems-48",
  "type": "Problem",
  "number": "8.0.47",
  "title": "End-of-Class Reflection.",
  "body": " End-of-Class Reflection  Type a 1000 word essay in response to the following prompt. This is the equivalent of 4 pages in 12 point Times New Roman font, double-spaced.   What were six of the most important discoveries or realizations you made in this class? In other words, what are you taking away from this class that you think might stick with you over time and\/or influence you in the future? What have you experienced that might have a long-term effect on you intellectually or personally? These can include things you had not realized about mathematics or society, specific homework problems or theorems, etc. These can be things that made sense to you, or topics where you were confused, points that you agreed\/disagreed with in the readings or class discussions, issues that arose while working on your assignments, etc.    Explain why these six discoveries or realizations are important to you.    You should include a combination of observations about both mathematics and your habits, practices, and beliefs about mathematics.   This assignment grade is based only on completion (i.e. if you turn it in, it meets the length requirement, and it appropriately responds to the prompt above, then you get full credit).  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
