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
  "id": "s123n",
  "level": "1",
  "url": "s123n.html",
  "type": "Section",
  "number": "2.1",
  "title": "Mathematics Begins With Questions",
  "body": " Mathematics Begins With Questions  Mathematical reasoning always begins with a question. Most students experience math in school, including in university, as a sequence of answers to questions that they have never heard asked. Don't believe this lie! Mathematics is about wondering, questioning, being curious, and making sense of the world. So let's begin with a question.   What is the value of the sum for different positive integer values of ?    In this class, we will frequently engage in collaborative activities, which we will call checkpoints. Here are the expectations for checkpoints, which will usually either be a problem to solve or a question to discuss:   First, begin the discussion by going around your group and having each person spend 10-seconds sharing an initial strategy for solving the problem, or sharing a answer to the question if it is a discussion question.    Second, go around the group again and give a 10-second follow-up answer. This allows everyone to have a chance to offer their thoughts before the general problem-solving or discussion begins.    Third, as a group, solve the problem or engage in the discussion for the checkpoint.       Discuss with your neighbors:   What qualities would you want to see in a \"good\" answer to the question above?    What are some different approaches that you could use to start trying to answer the question?      "
},
{
  "id": "s123n-3",
  "level": "2",
  "url": "s123n.html#s123n-3",
  "type": "Question",
  "number": "2.1.1",
  "title": "",
  "body": " What is the value of the sum for different positive integer values of ?  "
},
{
  "id": "s123n-4",
  "level": "2",
  "url": "s123n.html#s123n-4",
  "type": "Remark",
  "number": "2.1.2",
  "title": "",
  "body": " In this class, we will frequently engage in collaborative activities, which we will call checkpoints. Here are the expectations for checkpoints, which will usually either be a problem to solve or a question to discuss:   First, begin the discussion by going around your group and having each person spend 10-seconds sharing an initial strategy for solving the problem, or sharing a answer to the question if it is a discussion question.    Second, go around the group again and give a 10-second follow-up answer. This allows everyone to have a chance to offer their thoughts before the general problem-solving or discussion begins.    Third, as a group, solve the problem or engage in the discussion for the checkpoint.     "
},
{
  "id": "s123n-5",
  "level": "2",
  "url": "s123n.html#s123n-5",
  "type": "Checkpoint",
  "number": "2.1.3",
  "title": "",
  "body": " Discuss with your neighbors:   What qualities would you want to see in a \"good\" answer to the question above?    What are some different approaches that you could use to start trying to answer the question?     "
},
{
  "id": "s123napproaches",
  "level": "1",
  "url": "s123napproaches.html",
  "type": "Section",
  "number": "2.2",
  "title": "Exploration Leads to Conjecture",
  "body": " Exploration Leads to Conjecture  Let's discuss a few useful principles for exploring mathematical questions, which also apply to creating mathematical proofs.    Work out small examples with pencil and paper.     Explore the sum for small values of by computing the sums for . What patterns do you notice, if any?     Draw various pictures or diagrams to visualize the problem, theorem, definition, etc.     Can you draw a picture to represent the sum ? How might such a picture help you understand the problem better?     Use a computer to conduct experiments and generate data.    The software system SageMath is extremely useful for mathematics, and it is built on top of Python, so if you know some Python it is very familiar. A simple SageMath interface is available for free at https:\/\/sagecell.sagemath.org\/ . You can also install SageMath on your computer, or you can use it through a web browser via services such as CoCalc https:\/\/cocalc.com\/ . Here is a simple SageMath command to compute the sum for a given positive integer :  for n in range(1,11): print(n, sum([k for k in range(1, n+1)]))  It is always helpful to try to visualize sequences of numbers, rather than just look at the numerical output. For example, here is code to create a plot of the values for as points of the form .  L = [] for n in range(1,16): L.append([n, sum([k for k in range(1, n+1)])]) points(L,xmax=50,ymax=120)   What type of function does this point plot look like the graph of?   Based on the explorations above, we might conjecture that the sum is given by a quadratic function of . So, suppose that there are constants , , and such that the equality holds for all positive integers . Using the small values we computed earlier for , we can set up a system of equations to solve for , , and . Solving for , and (for example, by back substitution), we find that , so we have the following conjecture.         "
},
{
  "id": "principle-smallexamples",
  "level": "2",
  "url": "s123napproaches.html#principle-smallexamples",
  "type": "Principle",
  "number": "2.2.1",
  "title": "",
  "body": "  Work out small examples with pencil and paper.   "
},
{
  "id": "s123napproaches-4",
  "level": "2",
  "url": "s123napproaches.html#s123napproaches-4",
  "type": "Checkpoint",
  "number": "2.2.2",
  "title": "",
  "body": " Explore the sum for small values of by computing the sums for . What patterns do you notice, if any?  "
},
{
  "id": "principle-drawapicture",
  "level": "2",
  "url": "s123napproaches.html#principle-drawapicture",
  "type": "Principle",
  "number": "2.2.3",
  "title": "",
  "body": "  Draw various pictures or diagrams to visualize the problem, theorem, definition, etc.   "
},
{
  "id": "s123napproaches-6",
  "level": "2",
  "url": "s123napproaches.html#s123napproaches-6",
  "type": "Checkpoint",
  "number": "2.2.4",
  "title": "",
  "body": " Can you draw a picture to represent the sum ? How might such a picture help you understand the problem better?  "
},
{
  "id": "principle-computationalexperiments",
  "level": "2",
  "url": "s123napproaches.html#principle-computationalexperiments",
  "type": "Principle",
  "number": "2.2.5",
  "title": "",
  "body": "  Use a computer to conduct experiments and generate data.   "
},
{
  "id": "s123napproaches-12",
  "level": "2",
  "url": "s123napproaches.html#s123napproaches-12",
  "type": "Checkpoint",
  "number": "2.2.6",
  "title": "",
  "body": " What type of function does this point plot look like the graph of?  "
},
{
  "id": "conj-123nsum",
  "level": "2",
  "url": "s123napproaches.html#conj-123nsum",
  "type": "Conjecture",
  "number": "2.2.7",
  "title": "",
  "body": "      "
},
{
  "id": "s123nproofs",
  "level": "1",
  "url": "s123nproofs.html",
  "type": "Section",
  "number": "2.3",
  "title": "Conjecture Requires Experimental Verification and Proof",
  "body": " Conjecture Requires Experimental Verification and Proof  We have now explored different approaches to understanding the sum for positive integers , and it led us to conjecture that So... what do we do now?    Test conjectures with as many experiments as possible!    Let's put this principle into practice using SageMath by testing our conjecture for the first 10,000 positive integers . for n in range(1,10001): S = sum([k for k in range(1, n+1)]) formula = n*(n+1)\/2 if S != formula: print(\"Conjecture is false at n =\"+str(n)) if n % 1000 == 0: print(\"Conjecture is true up to n=\"+str(n)) This provides stronger evidence that our conjecture is correct, but it is still not a proof.  So, now that we have a conjecture that is supported by experimental evidence, we need to (A) determine if it is actually true and (B) if it is true, we need to give a clear explanation of why it is true. This means we need a mathematical proof. Unfortunately, \"mathematical proof\" is a more complicated topic than one might expect. The standards for what a \"rigorous\" proof is depends on context, audience, and purpose. It also depends on what \"world\" of mathematics you are working in.  In this class, we will rely on a framework developed by David Tall in his book How Humans Learn to Think Mathematically: Exploring the Three Worlds of Mathematics . You will read more about this framework and reflect on it for Essay 1.   David Tall's Three Worlds of Mathematics, from Proof and Proving in Mathematics Education , page 24.   A picture of David Tall's Three Worlds of Mathematics with images and words illustrating the embodied, symbolic, and formal worlds of mathematics.    Our goal is to give three different proofs of our conjecture, one proof representing each of the three worlds of mathematics.  "
},
{
  "id": "principle-testmore",
  "level": "2",
  "url": "s123nproofs.html#principle-testmore",
  "type": "Principle",
  "number": "2.3.1",
  "title": "",
  "body": "  Test conjectures with as many experiments as possible!   "
},
{
  "id": "fig-threeworlds",
  "level": "2",
  "url": "s123nproofs.html#fig-threeworlds",
  "type": "Figure",
  "number": "2.3.2",
  "title": "",
  "body": " David Tall's Three Worlds of Mathematics, from Proof and Proving in Mathematics Education , page 24.   A picture of David Tall's Three Worlds of Mathematics with images and words illustrating the embodied, symbolic, and formal worlds of mathematics.   "
},
{
  "id": "s123nembodied",
  "level": "1",
  "url": "s123nembodied.html",
  "type": "Section",
  "number": "2.4",
  "title": "Embodied Proof",
  "body": " Embodied Proof  Here is a description of the embodied world from David Tall's paper \"Building Theories: The Three Worlds of Mathematics\", published in For the Learning of Mathematics in 2004 .   The first [world] grows out of our perceptions of the world and consists of our thinking about things that we perceive and sense, not only in the physical world, but in our own mental world of meaning. By reflection and by the use of increasingly sophisticated language, we can focus on aspects of our sensory experience that enable us to envisage conceptions that no longer exist in the world outside, such as a 'line' that is 'perfectly straight'. I now term this world the 'conceptual-embodied world' or ' embodied world' for short.   Embodied proofs are usually considered \"informal\" by professional mathematicians. Embodied mathematical reasoning is usually not considered sufficiently rigorous for professional mathematical proof in the early 21st century. However, embodied reasoning is often used by professional mathematicians to convey key insights or intuitions that are later made more precise with a formal proof.  Here is a picture that gives an embodied proof of our conjecture, represented for the value . Note that the shaded area is equal to the sum , and that this area is half of the area of a rectangle that is 10 blocks by 11 blocks in size. Therefore, the shaded area is half of the total area, which is The embodied proof of our conjecture is to imagine this picture for any value of .   A 10 by 11 grid illustrating the embodied proof of our conjecture.   A 10 by 11 grid where the squares in the lower left half are shaded.     Discuss this picture. Why is this a proof of the conjecture? Can you see how to generalize this picture to justify that our conjecture is true for any positive integer ?   "
},
{
  "id": "fig-embodied123nsum",
  "level": "2",
  "url": "s123nembodied.html#fig-embodied123nsum",
  "type": "Figure",
  "number": "2.4.1",
  "title": "",
  "body": " A 10 by 11 grid illustrating the embodied proof of our conjecture.   A 10 by 11 grid where the squares in the lower left half are shaded.   "
},
{
  "id": "s123nembodied-7",
  "level": "2",
  "url": "s123nembodied.html#s123nembodied-7",
  "type": "Checkpoint",
  "number": "2.4.2",
  "title": "",
  "body": " Discuss this picture. Why is this a proof of the conjecture? Can you see how to generalize this picture to justify that our conjecture is true for any positive integer ?  "
},
{
  "id": "s123nsymbolic",
  "level": "1",
  "url": "s123nsymbolic.html",
  "type": "Section",
  "number": "2.5",
  "title": "Symbolic Proof",
  "body": " Symbolic Proof  Here is a description of the symbolic world from David Tall's paper \"Building Theories: The Three Worlds of Mathematics\", published in For the Learning of Mathematics in 2004 .   The second world is the world of symbols that we use for calculation and manipulation in arithmetic, algebra, calculus and so on. These begin with actions (such as pointing and counting) that are encapsulated as concepts by using symbols that allow us to switch effortlessly from processes to do mathematics, to concepts to think about... The initial stages of counting and early arithmetic are largely embodied. But the focus on the properties of the symbols and the relationship between them moves away from the physical meaning to a symbolic activity in arithmetic. This becomes increasingly sophisticated, with the introduction of more sophisticated number concepts (fractions, negatives, rationals, irrationals, infinite decimals, complex numbers, vectors in two and three, then n dimensions, and so on) that enable us to calculate and manipulate symbols with great accuracy and precision.   An example of an embodied-symbolic proof of our conjecture for is the following. Take two copies of our sum and add them together, but place one copy on top of the other, with the second set of summands appearing in the opposite order: When these two sums are added together, the summands pair to produce the sum of six copies of . Thus, the initial sum, , must be half of this total, is equal to half of , which is .  This proof is embodied because it relies on visualizing the two sums being added together in this way, and because it relies on the physical action of pairing the summands. It is symbolic because it relies on manipulating the symbols of addition and equality to arrive at the conclusion.   Discuss the proof above. Does it make sense? Why or why not?   Next, let's look at a more general version of this proof that would be considered symbolic . When writing a proof that is more symbolic or formal (which we will discuss next), we usually will place our argument in a proof environment that begins with the word \"Proof\" and ends with either a small box symbol or the letters \"QED\" (which stands for the Latin phrase quod erat demonstrandum , meaning \"which was to be demonstrated\"). This is what you should do when writing your own symbolic and\/or formal proofs.  In the proof below, we will use the sigma notation for sums. Remember that the notation means to sum the terms . Using this notation, our conjecture can be written as    Proof of  We write the sum twice, once in the usual order and once in reverse order, and add them together: Therefore, the equation above gives from which it follows that     Discuss this proof. Does it make sense? Why or why not?    Which of the three proofs (embodied, embodied-symbolic, and symbolic) that we have seen so far do you prefer? Why? Which of these proofs most makes you believe that our conjecture is true? Why?   "
},
{
  "id": "s123nsymbolic-6",
  "level": "2",
  "url": "s123nsymbolic.html#s123nsymbolic-6",
  "type": "Checkpoint",
  "number": "2.5.1",
  "title": "",
  "body": " Discuss the proof above. Does it make sense? Why or why not?  "
},
{
  "id": "s123nsymbolic-9",
  "level": "2",
  "url": "s123nsymbolic.html#s123nsymbolic-9",
  "type": "Proof",
  "number": "2.5.1",
  "title": "Proof of Conjecture 2.2.7.",
  "body": " Proof of  We write the sum twice, once in the usual order and once in reverse order, and add them together: Therefore, the equation above gives from which it follows that   "
},
{
  "id": "s123nsymbolic-10",
  "level": "2",
  "url": "s123nsymbolic.html#s123nsymbolic-10",
  "type": "Checkpoint",
  "number": "2.5.2",
  "title": "",
  "body": " Discuss this proof. Does it make sense? Why or why not?  "
},
{
  "id": "s123nsymbolic-11",
  "level": "2",
  "url": "s123nsymbolic.html#s123nsymbolic-11",
  "type": "Checkpoint",
  "number": "2.5.3",
  "title": "",
  "body": " Which of the three proofs (embodied, embodied-symbolic, and symbolic) that we have seen so far do you prefer? Why? Which of these proofs most makes you believe that our conjecture is true? Why?  "
},
{
  "id": "s123nformal",
  "level": "1",
  "url": "s123nformal.html",
  "type": "Section",
  "number": "2.6",
  "title": "Formal Proof",
  "body": " Formal Proof  The final world of mathematics is the formal world, which is described as follows by David Tall in his paper \"Building Theories: The Three Worlds of Mathematics\", published in For the Learning of Mathematics in 2004 .   The third world is based on properties , expressed in terms of formal definitions that are used as axioms to specify mathematical structures (such as 'group', 'field', 'vector space', 'topological space' and so on). This world I have called the 'formal-axiomatic world' or ' formal world', for short. It turns previous experiences on their heads, working not with familiar objects of experience, but with axioms that are carefully formulated to define mathematical structures in terms of specified properties. Other properties are then deduced by formal proof to build a sequence of theorems. Within the axiomatic system, new concepts can be defined and their properties deduced to build a coherent, logically deduced theory.   One of the first formal proof methods that students usually learn is called mathematical induction . There are various flavors of induction, including the \"method of descent\", \"strong induction\", \"weak induction\", etc. We will continue to discuss various aspects of these distinctions, but what is more important than learning names is to learn and understand the key idea of induction:   verify small cases, then use those small cases to verify the next case, then use that new case to verify the next case, then use that new case to verify the next case, and then carefully explain why you can always continue this process for a specific problem or proof.     We will begin by considering an example of an embodied inductive proof. The question that will motivate us is the following.    Consider any map formed by drawing straight lines in the plane, each line extending infinitely in both directions, to represent the boundaries of the regions. Some regions will be compact and bounded, others will be unbounded and go off to infinity. Is it always possible to color the regions using only two colors, say white and gray, in such a way that white and gray regions never share an edge? In other words, the edges between regions always have white on one side and gray on the other side. If yes, why? If no, why not?     Work on this problem with your group. Do you think the answer is \"yes, it is always possible\" or \"no, it is not always possible\"? Try to come up with a convincing argument to support your answer.     The answer to is yes.     We will prove by mathematical induction on the number of lines, . For the base case, when , there are two regions separated by a single line. We can color one region white and the other gray, so the base case holds.  Next, we prove the inductive step. Assume that for some arbitrary value , any map formed by lines can be colored using only two colors so that no two adjacent regions share the same color. Now, consider a map formed by lines. We can think of this map as being formed by first drawing lines, and then adding one additional line. By our inductive hypothesis, we can color the regions formed by the first lines using only two colors. Now, when we add the st line, it will intersect some of the existing regions, dividing them into two new regions. To ensure that no two adjacent regions share the same color, we can simply switch the colors of all the regions on one side of the new line. This way, the regions on either side of the new line will have different colors, and the coloring of the other regions remains the same. Further, none of the adjacent regions have the same color.    Discuss this proof. Does it make sense? Why or why not?   Now, let's give an inductive proof of our original conjecture that is within the world of formal mathematics.   Proof of  We use induction. For the base case, when , we have so the base case holds.  For the inductive step, assume that for some arbitrary value , we have We need to show that this implies that Starting from the left-hand side, we have This completes the inductive step, and therefore our proof by induction is complete.    Discuss this proof. Does it make sense? Why or why not? What is the most confusing part? Why is it confusing?   These two proofs demonstrate how you can use a small number of initial data points to make a conjecture, then look at how the structure of the problem leads you to use the same pattern of logical argument repeatedly. This \"pattern of logical argument\" is the inductive step of an induction argument, while the small initial data points are the base cases of the inductive argument. We are now in a position to give a precise statement of the principle of mathematical induction.   Principle of Mathematical Induction   Suppose we have a sequence of mathematical statements (one for each natural number). If the following two properties hold, then is true for every natural number :   The base case : is true.    The induction step : If for a natural number the statement is true, then is true.        Discuss how the two proofs we did above are connected to the principle of mathematical induction. What is the mathematical statement for each of these proofs? What is the statement in the base case for each of these proofs?   There is a variation on induction called strong induction that uses a stronger induction step, which we will sometimes need.   Principle of Strong Mathematical Induction   Suppose we have a sequence of mathematical statements (one for each natural number). If the following two properties hold, then is true for every natural number :   The base case : is true.    The induction step : If for every natural number the statement is true for all , then is true.       Note that in strong induction, we have to know that all of the preceding statements are true, rather than just the immediately preceding statement, in order to guarantee the implication.  "
},
{
  "id": "ques-twocolorregions",
  "level": "2",
  "url": "s123nformal.html#ques-twocolorregions",
  "type": "Question",
  "number": "2.6.1",
  "title": "",
  "body": "  Consider any map formed by drawing straight lines in the plane, each line extending infinitely in both directions, to represent the boundaries of the regions. Some regions will be compact and bounded, others will be unbounded and go off to infinity. Is it always possible to color the regions using only two colors, say white and gray, in such a way that white and gray regions never share an edge? In other words, the edges between regions always have white on one side and gray on the other side. If yes, why? If no, why not?   "
},
{
  "id": "s123nformal-7",
  "level": "2",
  "url": "s123nformal.html#s123nformal-7",
  "type": "Checkpoint",
  "number": "2.6.2",
  "title": "",
  "body": " Work on this problem with your group. Do you think the answer is \"yes, it is always possible\" or \"no, it is not always possible\"? Try to come up with a convincing argument to support your answer.  "
},
{
  "id": "thm-twocolors",
  "level": "2",
  "url": "s123nformal.html#thm-twocolors",
  "type": "Theorem",
  "number": "2.6.3",
  "title": "",
  "body": "  The answer to is yes.   "
},
{
  "id": "s123nformal-9",
  "level": "2",
  "url": "s123nformal.html#s123nformal-9",
  "type": "Proof",
  "number": "2.6.1",
  "title": "",
  "body": " We will prove by mathematical induction on the number of lines, . For the base case, when , there are two regions separated by a single line. We can color one region white and the other gray, so the base case holds.  Next, we prove the inductive step. Assume that for some arbitrary value , any map formed by lines can be colored using only two colors so that no two adjacent regions share the same color. Now, consider a map formed by lines. We can think of this map as being formed by first drawing lines, and then adding one additional line. By our inductive hypothesis, we can color the regions formed by the first lines using only two colors. Now, when we add the st line, it will intersect some of the existing regions, dividing them into two new regions. To ensure that no two adjacent regions share the same color, we can simply switch the colors of all the regions on one side of the new line. This way, the regions on either side of the new line will have different colors, and the coloring of the other regions remains the same. Further, none of the adjacent regions have the same color.  "
},
{
  "id": "s123nformal-10",
  "level": "2",
  "url": "s123nformal.html#s123nformal-10",
  "type": "Checkpoint",
  "number": "2.6.4",
  "title": "",
  "body": " Discuss this proof. Does it make sense? Why or why not?  "
},
{
  "id": "s123nformal-12",
  "level": "2",
  "url": "s123nformal.html#s123nformal-12",
  "type": "Proof",
  "number": "2.6.2",
  "title": "Proof of Conjecture 2.2.7.",
  "body": " Proof of  We use induction. For the base case, when , we have so the base case holds.  For the inductive step, assume that for some arbitrary value , we have We need to show that this implies that Starting from the left-hand side, we have This completes the inductive step, and therefore our proof by induction is complete.  "
},
{
  "id": "s123nformal-13",
  "level": "2",
  "url": "s123nformal.html#s123nformal-13",
  "type": "Checkpoint",
  "number": "2.6.5",
  "title": "",
  "body": " Discuss this proof. Does it make sense? Why or why not? What is the most confusing part? Why is it confusing?  "
},
{
  "id": "principle-induction",
  "level": "2",
  "url": "s123nformal.html#principle-induction",
  "type": "Principle",
  "number": "2.6.6",
  "title": "Principle of Mathematical Induction.",
  "body": " Principle of Mathematical Induction   Suppose we have a sequence of mathematical statements (one for each natural number). If the following two properties hold, then is true for every natural number :   The base case : is true.    The induction step : If for a natural number the statement is true, then is true.      "
},
{
  "id": "s123nformal-16",
  "level": "2",
  "url": "s123nformal.html#s123nformal-16",
  "type": "Checkpoint",
  "number": "2.6.7",
  "title": "",
  "body": " Discuss how the two proofs we did above are connected to the principle of mathematical induction. What is the mathematical statement for each of these proofs? What is the statement in the base case for each of these proofs?  "
},
{
  "id": "principle-strong-induction",
  "level": "2",
  "url": "s123nformal.html#principle-strong-induction",
  "type": "Principle",
  "number": "2.6.8",
  "title": "Principle of Strong Mathematical Induction.",
  "body": " Principle of Strong Mathematical Induction   Suppose we have a sequence of mathematical statements (one for each natural number). If the following two properties hold, then is true for every natural number :   The base case : is true.    The induction step : If for every natural number the statement is true for all , then is true.      "
},
{
  "id": "s123ncoding",
  "level": "1",
  "url": "s123ncoding.html",
  "type": "Section",
  "number": "2.7",
  "title": "Computational Experiments in SageMath",
  "body": " Computational Experiments in SageMath  If you are familiar with coding in Python, then this should be very familiar. If not, then this section will give you the background you need to conduct basic experiments in number theory.   SageMath is open source software for mathematical computation. It is a Python-based language that incorporates many powerful packages for computing in math. There are two straightforward options for coding in SageMath.   You can use the free website SageCell to do basic computations in SageMath. In SageCell, you are not able to save your work, so if you primarily use this for your coding, I recommend saving your code in a separate file so you have access to it later.    You can sign up for a free account at CoCalc . CoCalc gives you access to Jupyter notebooks running SageMath that you can save to your account.     We will now go through a few basic aspects of coding in Python\/SageMath that are useful for computational experimentation. Note that a list of objects in SageMath is stored between two brackets. For example, the following code will assign to \"L\" the list of odd numbers from 1 to 10 and then print the list:   L = [1,3,5,7,9] print(L)   If you copy and paste that into SageCell, you will get the list printed.    To generate the numbers from to , use the following command. Note that to actually use this, you have to specify what is.  range(n)    To view a list of numbers from the range generator, we use the \"list\" command combined with the range command, as shown in the following code block. In practice, when you use the range command, you do not need to use the list command. Note that the range command will generate numbers, but it will start at and end at . Copy and paste the following code into SageCell, and change the value of a few times.  n = 7 list(range(n))  If you write \"range(a,b)\", it will produce all the integers from \"a\" to \"b-1\".    A \"for loop\" will iterate through a list (or any other iterable collection of objects). The structure of a \"for loop\" is:  for \"name your objects\" in \"list or other iterable\": \"do something\"    Note that at the end of the \"for\" line you put a colon, and on the following lines within the for loop you indent by four spaces.  So, for example, if you want to print the numbers for from to , you would use the following code. Copy and paste this into SageCell, and then explore what happens when you change the value of , or when you change the exponent on .  n = 21 for i in range(1,n): print(i^2)  We often want to go through a list of numbers and check them for certain properties. To do this, we use an \"if\" statement.    To check a condition, we use an \"if\" statement as follows:  if \"condition\": \"do something\"    Note that at the end of the \"if\" line you put a colon, and on the following lines within the if block you indent by four spaces.  So, for example, if you want to go through the numbers from 1 to 50 and only print the multiples of 3, then you would need to do the following:   use a for loop from 1 to 50,    check if each value is divisible by 3,    if it is divisible by 3, print the value.   The way we check divisibility is to compute the remainder when dividing by 3 and checking to see if it is 0. To compute the remainder of divided by , use the following command:   n % k   To check if two things are equal, we use \"==\". To check if two values are not equal, we use \"!=\".  So, the following code will print only numbers divisible by 3.   for i in range(1,51): if i % 3 == 0: print(i)   The following program will print the numbers that are not divisible by 3.   for i in range(1,51): if i % 3 != 0: print(i)     We can store values in a list, which we discussed earlier. To include a new value at the end of a list , we use the \"append\" method.   L.append(k)     So, for example, if we want to make a list of all numbers from 1 to 50 that are divisible by 3, we first create an empty list and then append the numbers that are divisible by 3.   L = [] for i in range(1,51): if i % 3 == 0: L.append(i) print(L)   If we have a pair , we can store those pairs in a list as well. We can then plot those pairs using the \"points\" command.   L = [[1,3],[2,5],[3,7],[4,4],[5,10]] points(L)   So, for example, suppose you want to find the remainder for each number from 1 to 100 after you divide by 7, and the plot the pairs . You would use this code.   L = [] k = 7 for n in range(101): remainder = n % k L.append([n,remainder]) points(L)   Next, we will make a list of all the numbers from 1 to 500 that are divisible by 5 but not divisible by 7. Then, we will make a list of the points for each of those numbers, where is the floor function defined in Problem P1, computed using the command \"floor(i\/10)\". Finally, we will use the \"points\" command to make a plot of all the points in our list. Note the use of the \"and\" structure to check multiple conditions.   values = [] for n in range(1,501): if (n % 5 == 0) and (n % 7 != 0): values.append(n) pairs = [] for i in values: pairs.append([i,floor(i\/10)]) points(pairs)   Finally, we need to know how to find the length of a list.    To compute the length of a list , use the following command.   len(L)     For example, if we want to count how many numbers less than are divisible by 5 but not divisible by 7, we can do the following.   Make an empty list to store our values.    For each number between 1 and 500, check to see if it meets our divisibility criteria. If it does, add it to our list of values.    Print the length of the resulting list, which tells us how many numbers we found in total.      n = 501 values = [] for i in range(1,n): if (i % 5 == 0) and (i % 7 != 0): values.append(i) print(len(values))   "
},
{
  "id": "def-range",
  "level": "2",
  "url": "s123ncoding.html#def-range",
  "type": "Definition",
  "number": "2.7.1",
  "title": "",
  "body": "  To generate the numbers from to , use the following command. Note that to actually use this, you have to specify what is.  range(n)   "
},
{
  "id": "def-forloop",
  "level": "2",
  "url": "s123ncoding.html#def-forloop",
  "type": "Definition",
  "number": "2.7.2",
  "title": "",
  "body": "  A \"for loop\" will iterate through a list (or any other iterable collection of objects). The structure of a \"for loop\" is:  for \"name your objects\" in \"list or other iterable\": \"do something\"   "
},
{
  "id": "def-ifstatements",
  "level": "2",
  "url": "s123ncoding.html#def-ifstatements",
  "type": "Definition",
  "number": "2.7.3",
  "title": "",
  "body": "  To check a condition, we use an \"if\" statement as follows:  if \"condition\": \"do something\"   "
},
{
  "id": "def-append",
  "level": "2",
  "url": "s123ncoding.html#def-append",
  "type": "Definition",
  "number": "2.7.4",
  "title": "",
  "body": "  We can store values in a list, which we discussed earlier. To include a new value at the end of a list , we use the \"append\" method.   L.append(k)    "
},
{
  "id": "def-length",
  "level": "2",
  "url": "s123ncoding.html#def-length",
  "type": "Definition",
  "number": "2.7.5",
  "title": "",
  "body": "  To compute the length of a list , use the following command.   len(L)    "
},
{
  "id": "prime-numbers",
  "level": "1",
  "url": "prime-numbers.html",
  "type": "Section",
  "number": "3.1",
  "title": "Numbers, Sets, and Primes",
  "body": " Numbers, Sets, and Primes  Now that we have language allowing us to describe different aspects of mathematical reasoning and proof, we can begin our study of number theory. We will start with the study of prime numbers. First, let's define the types of numbers we will be discussing.       The set of natural numbers is the set .    The set of integers is the set .       Observe that we are using set notation above to define these families of numbers. We use \" \" to mean \"is defined to be\"; this is helpful when distinguishing between when we define something and when we are indicating equality. When we are defining a set, we often use curly braces to indicate the elements of the set and we specify the elements within the braces. One can use special notation within the braces to indicate a pattern for the elements of the set. For example, we can describe the natural numbers as The symbol \" \" is read as \"is an element of\" or \"belongs to\". The \":\" is read as \"such that\", so that the above set is read as \"the set of all integers such that is greater than \".   Does the notation above make sense? Why or why not?   With this, we can define sets such as the rational numbers , which are the numbers in the set    Take turns reading the set-builder description of the rationals out loud as a sentence. Discuss every symbol used in the definition and talk about what that symbol represents.     Let and be integers with .   We say that is divisible by  if there exists an integer such that .    If is divisible by , we also say that  divides  and we write .    If is not divisible by , we write .            means that five divides thirty.     means that six does not divide seventeen.      We can combine set builder notation with these definitions to describe sets of numbers with certain divisibility properties. For example, the set of all integers that are divisible by but not divisible by is written as Note that if we tried to list the elements of this set, it would be hard to make it clear what the pattern is. For example, if we wrote the set above as it would be unclear that is not in the set. However, using the set-builder notation, two conditions are given following the \":\" symbol that can be used to clearly determine that is not in the set.   Use set builder notation and the notation for divisibility to write the following sets:   The set of all natural numbers divisible by .    The set of all integers not divisible by .    The set of all natural numbers divisible by but not by .      Some of the most important natural numbers are the primes, defined as follows.    A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself. If a number is not prime, then it is composite . We will denote the set of prime numbers by .     With your group, find the first ten prime numbers.    With your group, use set builder notation to describe the set of all prime numbers that are three more than a multiple of four.  Hint: You might need to write a longer phrase to the right of \":\", for example, to describe what the remainder of is after dividing by .   Number theory is an ancient topic of study, with prime numbers being studied for thousands of years. We will begin with an old process to find primes.    The Sieve of Eratosthenes is a method to find all prime numbers between and a given bound . The process is as follows:   Write down all the numbers from to .    Start with the first number in the list (which is ). Circle it (it is prime) and then cross out all of its multiples.    Move to the next number that is not crossed out. Circle it (it is prime) and then cross out all of its multiples.    Repeat this process until you have processed each number up to .   The numbers that remain uncrossed are all of the prime numbers between and .     Use the Sieve of Eratosthenes to find all prime numbers between and .   A visual illustration of the Sieve of Eratosthenes is given on the Wikipedia page for the Sieve . Implicit in the Sieve of Eratosthenes is that the idea that every number is divisible by some prime number. Let's go ahead and prove that this is true.    Every natural number greater than 1 is divisible by a prime number.     This proof closely follows the one given for Proposition 1.6.3 in Cioaba and Linde's A Bridge to Advanced Mathematics . We will prove this by strong induction . The base case is , and the result is true in this case since is prime.  For the (strong) induction step, let be a positive integer and assume that every natural number has a prime divisor. We want to prove that also has a prime divisor. If is prime, then we are done. If not, then must have some divisor such that , so that means there exists a number such that By our induction hypothesis, has a prime divisor. So, there exists a number and a prime such that Therefore, we have that and thus is also a prime divisor of , which finishes our proof.       What do you think the two or three key ideas of this proof are?    If you had to summarize this proof in one or two sentences, without using any symbols, what would you say?    In what way does the following picture give an embodied version of this proof?     A picture of dots, illustrating that is divisible by which has a prime divisor .   A picture of sixty dots grouped into five groups of twelve, where each of those is grouped into four groups of three.      "
},
{
  "id": "def-numbers",
  "level": "2",
  "url": "prime-numbers.html#def-numbers",
  "type": "Definition",
  "number": "3.1.1",
  "title": "",
  "body": "     The set of natural numbers is the set .    The set of integers is the set .      "
},
{
  "id": "prime-numbers-5",
  "level": "2",
  "url": "prime-numbers.html#prime-numbers-5",
  "type": "Checkpoint",
  "number": "3.1.2",
  "title": "",
  "body": " Does the notation above make sense? Why or why not?  "
},
{
  "id": "prime-numbers-7",
  "level": "2",
  "url": "prime-numbers.html#prime-numbers-7",
  "type": "Checkpoint",
  "number": "3.1.3",
  "title": "",
  "body": " Take turns reading the set-builder description of the rationals out loud as a sentence. Discuss every symbol used in the definition and talk about what that symbol represents.  "
},
{
  "id": "def-divisible",
  "level": "2",
  "url": "prime-numbers.html#def-divisible",
  "type": "Definition",
  "number": "3.1.4",
  "title": "",
  "body": "  Let and be integers with .   We say that is divisible by  if there exists an integer such that .    If is divisible by , we also say that  divides  and we write .    If is not divisible by , we write .      "
},
{
  "id": "prime-numbers-9",
  "level": "2",
  "url": "prime-numbers.html#prime-numbers-9",
  "type": "Example",
  "number": "3.1.5",
  "title": "",
  "body": "     means that five divides thirty.     means that six does not divide seventeen.     "
},
{
  "id": "prime-numbers-11",
  "level": "2",
  "url": "prime-numbers.html#prime-numbers-11",
  "type": "Checkpoint",
  "number": "3.1.6",
  "title": "",
  "body": " Use set builder notation and the notation for divisibility to write the following sets:   The set of all natural numbers divisible by .    The set of all integers not divisible by .    The set of all natural numbers divisible by but not by .     "
},
{
  "id": "def-prime-number",
  "level": "2",
  "url": "prime-numbers.html#def-prime-number",
  "type": "Definition",
  "number": "3.1.7",
  "title": "",
  "body": "  A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself. If a number is not prime, then it is composite . We will denote the set of prime numbers by .   "
},
{
  "id": "prime-numbers-14",
  "level": "2",
  "url": "prime-numbers.html#prime-numbers-14",
  "type": "Checkpoint",
  "number": "3.1.8",
  "title": "",
  "body": " With your group, find the first ten prime numbers.  "
},
{
  "id": "prime-numbers-15",
  "level": "2",
  "url": "prime-numbers.html#prime-numbers-15",
  "type": "Checkpoint",
  "number": "3.1.9",
  "title": "",
  "body": " With your group, use set builder notation to describe the set of all prime numbers that are three more than a multiple of four.  Hint: You might need to write a longer phrase to the right of \":\", for example, to describe what the remainder of is after dividing by .  "
},
{
  "id": "def-sieveoferatosthenes",
  "level": "2",
  "url": "prime-numbers.html#def-sieveoferatosthenes",
  "type": "Definition",
  "number": "3.1.10",
  "title": "",
  "body": "  The Sieve of Eratosthenes is a method to find all prime numbers between and a given bound . The process is as follows:   Write down all the numbers from to .    Start with the first number in the list (which is ). Circle it (it is prime) and then cross out all of its multiples.    Move to the next number that is not crossed out. Circle it (it is prime) and then cross out all of its multiples.    Repeat this process until you have processed each number up to .   The numbers that remain uncrossed are all of the prime numbers between and .   "
},
{
  "id": "prime-numbers-18",
  "level": "2",
  "url": "prime-numbers.html#prime-numbers-18",
  "type": "Checkpoint",
  "number": "3.1.11",
  "title": "",
  "body": " Use the Sieve of Eratosthenes to find all prime numbers between and .  "
},
{
  "id": "thm-primesdividenumbers",
  "level": "2",
  "url": "prime-numbers.html#thm-primesdividenumbers",
  "type": "Theorem",
  "number": "3.1.12",
  "title": "",
  "body": "  Every natural number greater than 1 is divisible by a prime number.   "
},
{
  "id": "prime-numbers-21",
  "level": "2",
  "url": "prime-numbers.html#prime-numbers-21",
  "type": "Proof",
  "number": "3.1.1",
  "title": "",
  "body": " This proof closely follows the one given for Proposition 1.6.3 in Cioaba and Linde's A Bridge to Advanced Mathematics . We will prove this by strong induction . The base case is , and the result is true in this case since is prime.  For the (strong) induction step, let be a positive integer and assume that every natural number has a prime divisor. We want to prove that also has a prime divisor. If is prime, then we are done. If not, then must have some divisor such that , so that means there exists a number such that By our induction hypothesis, has a prime divisor. So, there exists a number and a prime such that Therefore, we have that and thus is also a prime divisor of , which finishes our proof.  "
},
{
  "id": "prime-numbers-22",
  "level": "2",
  "url": "prime-numbers.html#prime-numbers-22",
  "type": "Checkpoint",
  "number": "3.1.13",
  "title": "",
  "body": "    What do you think the two or three key ideas of this proof are?    If you had to summarize this proof in one or two sentences, without using any symbols, what would you say?    In what way does the following picture give an embodied version of this proof?     A picture of dots, illustrating that is divisible by which has a prime divisor .   A picture of sixty dots grouped into five groups of twelve, where each of those is grouped into four groups of three.     "
},
{
  "id": "infinitudeofprimes",
  "level": "1",
  "url": "infinitudeofprimes.html",
  "type": "Section",
  "number": "3.2",
  "title": "Infinitude of Primes",
  "body": " Infinitude of Primes  The most important question about primes that was asked in ancient times is the following.   How many primes are there? Are there only finitely many? Or are there infinitely many?   Let's look at some data. Define to be the number of primes less than or equal to . (Here is the Greek letter corresponding to \"p\", not the number .) So, for example, since are the four primes less than or equal to .  The following code will plot a point at for every prime up to . What happens if we change the upper bound to ?   L = [] M = 100 for i in range(M): if i in Primes(): L.append([i,len(L)+1]) points(L,xmax=M,ymax=M)   As was discovered thousands of years ago, the answer to our question is the following theorem, recorded in Euclid's Elements .    There are infinitely many primes.    We will give two versions of Euclid's proof. The first is a constructive proof.   We will apply the following operation: given a set of primes , produce the number . We will call this a Euclid step .  Note that does not divide , since dividing by leaves a remainder of . Similarly, dividing by leaves a remainder of . The same holds for every . Therefore, is a number that is not divisible by any of the primes we have, and by , there is a new prime that divides .  Thus, starting with , we obtain the prime . From there, we can produce the prime . From there, we can produce the prime . From there, we can produce the number . We can pick either of or to add to our list of primes.  With each application of a Euclid step, we produce a new prime. Thus, this yields an algorithm for constructing an infinite sequence of prime numbers.    What are the first few primes do you get when you start this process with the prime instead of the prime as your first value?    What makes sense about this proof? Do you feel that this proof is primarily embodied, symbolic, formal, or a combination of these worlds? Why?   Next we will consider Euclid's original version of this proof, which is a proof by contradiction . In a proof by contradiction, you suppose that the result is false, and show that this leads to a contradiction, hence the result must be true.   Suppose for contradiction that there are only finitely many primes, call them . If we apply a Euclid step (as defined in the previous proof) to these primes, then this produces a new prime that is not in our list. This contradicts our assumption that there are only finitely many primes, and thus there must be infinitely many primes.       Discuss the proof by contradiction. Does it make sense why this shows there are infinitely many primes?    Which of the two proofs do you prefer, constructive or contradiction? Why?      "
},
{
  "id": "infinitudeofprimes-3",
  "level": "2",
  "url": "infinitudeofprimes.html#infinitudeofprimes-3",
  "type": "Question",
  "number": "3.2.1",
  "title": "",
  "body": " How many primes are there? Are there only finitely many? Or are there infinitely many?  "
},
{
  "id": "thm-infinitudeofprimes",
  "level": "2",
  "url": "infinitudeofprimes.html#thm-infinitudeofprimes",
  "type": "Theorem",
  "number": "3.2.2",
  "title": "",
  "body": "  There are infinitely many primes.   "
},
{
  "id": "infinitudeofprimes-10",
  "level": "2",
  "url": "infinitudeofprimes.html#infinitudeofprimes-10",
  "type": "Proof",
  "number": "3.2.1",
  "title": "",
  "body": " We will apply the following operation: given a set of primes , produce the number . We will call this a Euclid step .  Note that does not divide , since dividing by leaves a remainder of . Similarly, dividing by leaves a remainder of . The same holds for every . Therefore, is a number that is not divisible by any of the primes we have, and by , there is a new prime that divides .  Thus, starting with , we obtain the prime . From there, we can produce the prime . From there, we can produce the prime . From there, we can produce the number . We can pick either of or to add to our list of primes.  With each application of a Euclid step, we produce a new prime. Thus, this yields an algorithm for constructing an infinite sequence of prime numbers.  "
},
{
  "id": "infinitudeofprimes-11",
  "level": "2",
  "url": "infinitudeofprimes.html#infinitudeofprimes-11",
  "type": "Checkpoint",
  "number": "3.2.3",
  "title": "",
  "body": " What are the first few primes do you get when you start this process with the prime instead of the prime as your first value?  "
},
{
  "id": "infinitudeofprimes-12",
  "level": "2",
  "url": "infinitudeofprimes.html#infinitudeofprimes-12",
  "type": "Checkpoint",
  "number": "3.2.4",
  "title": "",
  "body": " What makes sense about this proof? Do you feel that this proof is primarily embodied, symbolic, formal, or a combination of these worlds? Why?  "
},
{
  "id": "infinitudeofprimes-14",
  "level": "2",
  "url": "infinitudeofprimes.html#infinitudeofprimes-14",
  "type": "Proof",
  "number": "3.2.2",
  "title": "",
  "body": " Suppose for contradiction that there are only finitely many primes, call them . If we apply a Euclid step (as defined in the previous proof) to these primes, then this produces a new prime that is not in our list. This contradicts our assumption that there are only finitely many primes, and thus there must be infinitely many primes.  "
},
{
  "id": "infinitudeofprimes-15",
  "level": "2",
  "url": "infinitudeofprimes.html#infinitudeofprimes-15",
  "type": "Checkpoint",
  "number": "3.2.5",
  "title": "",
  "body": "    Discuss the proof by contradiction. Does it make sense why this shows there are infinitely many primes?    Which of the two proofs do you prefer, constructive or contradiction? Why?     "
},
{
  "id": "fundthmarithmetic",
  "level": "1",
  "url": "fundthmarithmetic.html",
  "type": "Section",
  "number": "3.3",
  "title": "The Fundamental Theorem of Arithmetic",
  "body": " The Fundamental Theorem of Arithmetic   established that every natural number greater than is divisible by a prime. This leads to a question: exactly which primes divide a natural number? Is it possible to give two different sets of primes that multiply together to give the same number?  The answer to this question is the following, which is something most of you learned as a \"fact\" in elementary and middle school.   The Fundamental Theorem of Arithmetic   Every natural number greater than can be written as a product of primes, and this product is unique for each number. Symbolically, given a natural number , there exist distinct primes and exponents such that and the primes and exponents are unique up to reordering of factors.     Find the prime factorizations for the following numbers.                    We will prove existence of factorizations and uniqueness of factorizations separately. This proof closely follows the structure of the proof given in Theorem 1.6.5 in Cioaba and Linde's A Bridge to Advanced Mathematics .   Proof of existence of prime factorizations  First, we will show that such a factorization exists, using strong induction. Our base case is , which is prime. For the (strong) induction step, let be a positive integer and assume that every natural number has a prime factorization. We want to prove that also has a prime factorization. If is prime, then we are done. If not, then must have some prime divisor such that , so that means there exists a number such that By induction, has a prime factorization If we multiply this by , we obtain a prime factorization for . Therefore, prime factorizations exist by induction.    Discuss the proof of existence using strong induction. What are the 2-3 key ideas that make this proof work?    Draw a picture or diagram that illustrates the inductive process of this proof.   Remember that when we introduced the principle of mathematical induction in , we did not give a proof for it. That is because the principle of mathematical induction is, for us in this course, an axiom that we take as given. In the formal world, mathematics is the study of correctness within logical systems, rather than being the study of reality or truth. So, in the formal world, we make certain assumptions (called \"axioms\") and then see what logical implications follow from these.  Different areas of mathematics rely to different degrees on the embodied, symbolic, and formal worlds of mathematics. Number theory is usually practiced by mathematicians through a blending of these three worlds, rather than being rigidly maintained within the formal world. So, we will use the following principle in this course.    In our development of number theory, we will rely on a mix of embodied, symbolic, and formal arguments. While we will not work purely in the formal world, we will regularly introduce axioms or fundamental principles of mathematics that are foundational to the formal world, so that students gain experience with the level of detail required when constructing very formal arguments.    For our proof of uniqueness of prime factorizations, we will use a proof by contradiction. It will have five steps.   Step 1: Assume for a contradiction that there is some natural number that has two distinct prime factorizations.    Step 2: Consider the smallest natural number that has this property.    Step 3: Use the two different factorizations of to construct a natural number that is strictly less than , so by assumption it has a unique prime factorization.    Step 4: Use the unique factorization of to prove that there are two primes and such that , which is impossible.    Step 5: Conclude that our assumption was faulty, and therefore every number has a unique prime factorization.      Discuss the 5-step strategy we will use for the proof. Does it make sense why this argument will logically imply that every number has a unique prime factorization? Why or why not?   Note that in Step 2, we made an assumption that given a set of natural numbers with some property, there is a smallest number in the set. This makes sense intuitively, because the smallest natural number is , and so in principle you could start at and check to see if it has the property, then check , then check , and so on until you find the first element in the set. However, in the formal world of mathematical proof, mathematicians want to know if this intuitive idea follows logically from another assumption we make about numbers, or if we should consider it as an independent principle. So, mathematicians asserted the following principle to formally allow this step in the proof.   Well-Ordering Principle   Every non-empty subset of the natural numbers contains a smallest element, which is sometimes called the least element of the set.    If you study formal axiomatic mathematics in more detail, you will find that the well-ordering principle and the principle of mathematical induction are equivalent. In other words, you can use the well-ordering principle to prove that induction is correct, and you can use induction to prove that well-ordering holds. In this course, we will take both of these as axiomatic principles, and we will direct our focus on proving number-theoretic results that they imply.   Proof of uniqueness of prime factorizations  We now show that each natural number has a unique prime factorization, using a proof by contradiction. Assume for contradiction that this is not true, and suppose that is the least natural number that has two distinct prime factorizations. So, suppose that there exist prime numbers and and natural numbers such that   Our first observation is that the 's are all distinct from the 's. This is because if there was a common prime factor in the two factorizations, we could divide by that factor to produce a new number that would be smaller than and would have two different prime factorizations. So, there are no common primes between the two factorizations.  We can assume that , since if it isn't we can exchange the names of the and . Define which is obtained by replacing one copy of with . We can then substitute our two factorizations of into this expression to get two different expressions for : and Notice that is less than , because it is created by subtracting a positive value from . Therefore, has a unique factorization.  From the first expression, we see that is a prime divisor of . Since is not equal to any of the values, it must be that , and hence there is a natural number such that Therefore, we have that Thus, we have found that the prime divides the prime , which is a contradiction. Therefore, every natural number has a unique prime factorization.       Review the proof with your group, matching up each of steps 1-5 with the corresponding section of the proof.    Discuss the details of each section of this proof. Does each step make sense? Why or why not?      While the fundamental theorem of arithmetic might seem obvious, the above proof shows that it it not as obvious as it seems. Further, the existence and uniqueness of prime factorization unlocks subtle and deep questions in mathematics. One of these questions is the \"Mertens Conjecture\", a conjecture that was stated in 1885 by Stieltjes and which was proved false in 1985 by Odlyzko and te Riele. Let's watch the following 9-minute Numberphile video from January 2020 in which Dr. Holly Krieger discusses Merterns' Conjecture.   A Prime Surprise (Mertens Conjecture) - Numberphile       What stood out to you about the mathematics in the video? Did anything surprise you?    Did you find the story of the Mertens conjecture interesting? Why or why not?    What aspects of embodied, symbolic, and formal mathematics are present in this video?      "
},
{
  "id": "thm-fundthmarithmetic",
  "level": "2",
  "url": "fundthmarithmetic.html#thm-fundthmarithmetic",
  "type": "Theorem",
  "number": "3.3.1",
  "title": "The Fundamental Theorem of Arithmetic.",
  "body": " The Fundamental Theorem of Arithmetic   Every natural number greater than can be written as a product of primes, and this product is unique for each number. Symbolically, given a natural number , there exist distinct primes and exponents such that and the primes and exponents are unique up to reordering of factors.   "
},
{
  "id": "fundthmarithmetic-5",
  "level": "2",
  "url": "fundthmarithmetic.html#fundthmarithmetic-5",
  "type": "Checkpoint",
  "number": "3.3.2",
  "title": "",
  "body": " Find the prime factorizations for the following numbers.                   "
},
{
  "id": "fundthmarithmetic-7",
  "level": "2",
  "url": "fundthmarithmetic.html#fundthmarithmetic-7",
  "type": "Proof",
  "number": "3.3.1",
  "title": "Proof of existence of prime factorizations.",
  "body": " Proof of existence of prime factorizations  First, we will show that such a factorization exists, using strong induction. Our base case is , which is prime. For the (strong) induction step, let be a positive integer and assume that every natural number has a prime factorization. We want to prove that also has a prime factorization. If is prime, then we are done. If not, then must have some prime divisor such that , so that means there exists a number such that By induction, has a prime factorization If we multiply this by , we obtain a prime factorization for . Therefore, prime factorizations exist by induction.  "
},
{
  "id": "fundthmarithmetic-8",
  "level": "2",
  "url": "fundthmarithmetic.html#fundthmarithmetic-8",
  "type": "Checkpoint",
  "number": "3.3.3",
  "title": "",
  "body": " Discuss the proof of existence using strong induction. What are the 2-3 key ideas that make this proof work?  "
},
{
  "id": "fundthmarithmetic-9",
  "level": "2",
  "url": "fundthmarithmetic.html#fundthmarithmetic-9",
  "type": "Checkpoint",
  "number": "3.3.4",
  "title": "",
  "body": " Draw a picture or diagram that illustrates the inductive process of this proof.  "
},
{
  "id": "principle-balancedworlds",
  "level": "2",
  "url": "fundthmarithmetic.html#principle-balancedworlds",
  "type": "Principle",
  "number": "3.3.5",
  "title": "",
  "body": "  In our development of number theory, we will rely on a mix of embodied, symbolic, and formal arguments. While we will not work purely in the formal world, we will regularly introduce axioms or fundamental principles of mathematics that are foundational to the formal world, so that students gain experience with the level of detail required when constructing very formal arguments.   "
},
{
  "id": "fundthmarithmetic-14",
  "level": "2",
  "url": "fundthmarithmetic.html#fundthmarithmetic-14",
  "type": "Checkpoint",
  "number": "3.3.6",
  "title": "",
  "body": " Discuss the 5-step strategy we will use for the proof. Does it make sense why this argument will logically imply that every number has a unique prime factorization? Why or why not?  "
},
{
  "id": "principle-wellorderingprinciple",
  "level": "2",
  "url": "fundthmarithmetic.html#principle-wellorderingprinciple",
  "type": "Principle",
  "number": "3.3.7",
  "title": "Well-Ordering Principle.",
  "body": " Well-Ordering Principle   Every non-empty subset of the natural numbers contains a smallest element, which is sometimes called the least element of the set.   "
},
{
  "id": "fundthmarithmetic-18",
  "level": "2",
  "url": "fundthmarithmetic.html#fundthmarithmetic-18",
  "type": "Proof",
  "number": "3.3.2",
  "title": "Proof of uniqueness of prime factorizations.",
  "body": " Proof of uniqueness of prime factorizations  We now show that each natural number has a unique prime factorization, using a proof by contradiction. Assume for contradiction that this is not true, and suppose that is the least natural number that has two distinct prime factorizations. So, suppose that there exist prime numbers and and natural numbers such that   Our first observation is that the 's are all distinct from the 's. This is because if there was a common prime factor in the two factorizations, we could divide by that factor to produce a new number that would be smaller than and would have two different prime factorizations. So, there are no common primes between the two factorizations.  We can assume that , since if it isn't we can exchange the names of the and . Define which is obtained by replacing one copy of with . We can then substitute our two factorizations of into this expression to get two different expressions for : and Notice that is less than , because it is created by subtracting a positive value from . Therefore, has a unique factorization.  From the first expression, we see that is a prime divisor of . Since is not equal to any of the values, it must be that , and hence there is a natural number such that Therefore, we have that Thus, we have found that the prime divides the prime , which is a contradiction. Therefore, every natural number has a unique prime factorization.  "
},
{
  "id": "fundthmarithmetic-19",
  "level": "2",
  "url": "fundthmarithmetic.html#fundthmarithmetic-19",
  "type": "Checkpoint",
  "number": "3.3.8",
  "title": "",
  "body": "    Review the proof with your group, matching up each of steps 1-5 with the corresponding section of the proof.    Discuss the details of each section of this proof. Does each step make sense? Why or why not?     "
},
{
  "id": "fundthmarithmetic-22",
  "level": "2",
  "url": "fundthmarithmetic.html#fundthmarithmetic-22",
  "type": "Checkpoint",
  "number": "3.3.9",
  "title": "",
  "body": "    What stood out to you about the mathematics in the video? Did anything surprise you?    Did you find the story of the Mertens conjecture interesting? Why or why not?    What aspects of embodied, symbolic, and formal mathematics are present in this video?     "
},
{
  "id": "FTAcorollaries",
  "level": "1",
  "url": "FTAcorollaries.html",
  "type": "Section",
  "number": "3.4",
  "title": "Consequences of the Fundamental Theorem",
  "body": " Consequences of the Fundamental Theorem  We will now investigate consequences of the Fundamental Theorem of Arithmetic.   Euclid's Lemma   Let be a prime. If and are natural numbers such that , then or .     Write the prime factorizations and . Then we have If divides the product, then must appear in the list of primes in the factorization of . Therefore, must be a divisor of one or both of and .    With your group, work through the logic of this proof using and the numbers and . Does the proof make sense? Why or why not?     Suppose that . If is any divisor of , then Where each .     If divides and , then . Thus, any power of a prime dividing must also divide .   We next define the greatest common divisor and least common multiple of two numbers, and express these quantities in terms of prime factorizations.    Let and be natural numbers. The greatest common divisor of and , denoted , is given by the largest natural number dividing both and . If , we say that and are coprime . The least common multiple of and , denoted , is given by the smallest natural number divisible by both and .     Find the greatest common divisor and the least common multiple for the following pairs of numbers.   5, 11    15, 36    367, 854      Using prime factorizations, it is straightforward to determine these values.    Suppose and are natural numbers. If is a prime such that appears in the prime factorization of and appears in the prime factorization of , then:    appears in the prime factorization of , and     appears in the prime factorization of .        The proposition is a consequence of the following two observations. The largest power of that divides both and is the minimum of the two exponents. The smallest power of that is divisible by both and is the maximum of the two exponents.    Discuss the above \"sketch\" of the proof with your group. Are you convinced by this? Do you feel it needs more details? Why or why not?   The Fundamental Theorem of Arithmetic is also the key ingredient in many classical proofs of irrationality. Here are three examples.    The value is irrational.     Suppose for a contradiction that for natural numbers and where the fraction is fully reduced; in other words, and are coprime. Then squaring both sides, we have that and therefore . However, this implies that there are an odd number of s in the prime factorization of the left side, while there are an even number in the prime factorization on the right. This is a contradiction, and therefore is not rational.       Discuss this proof. Does it make sense? Why or why not?    Modify this proof to show that is irrational.        The value is irrational.     Suppose for contradiction that for coprime numbers and . Then we have that , which implies that This implies that which is impossible by the uniqueness of prime factorization, yielding the desired contradiction.    Discuss this proof. Does it make sense? Why or why not?   "
},
{
  "id": "lem-euclidslemma",
  "level": "2",
  "url": "FTAcorollaries.html#lem-euclidslemma",
  "type": "Lemma",
  "number": "3.4.1",
  "title": "Euclid’s Lemma.",
  "body": " Euclid's Lemma   Let be a prime. If and are natural numbers such that , then or .   "
},
{
  "id": "FTAcorollaries-4",
  "level": "2",
  "url": "FTAcorollaries.html#FTAcorollaries-4",
  "type": "Proof",
  "number": "3.4.1",
  "title": "",
  "body": " Write the prime factorizations and . Then we have If divides the product, then must appear in the list of primes in the factorization of . Therefore, must be a divisor of one or both of and .  "
},
{
  "id": "FTAcorollaries-5",
  "level": "2",
  "url": "FTAcorollaries.html#FTAcorollaries-5",
  "type": "Checkpoint",
  "number": "3.4.2",
  "title": "",
  "body": " With your group, work through the logic of this proof using and the numbers and . Does the proof make sense? Why or why not?  "
},
{
  "id": "cor-factordivisorform",
  "level": "2",
  "url": "FTAcorollaries.html#cor-factordivisorform",
  "type": "Corollary",
  "number": "3.4.3",
  "title": "",
  "body": "  Suppose that . If is any divisor of , then Where each .   "
},
{
  "id": "FTAcorollaries-7",
  "level": "2",
  "url": "FTAcorollaries.html#FTAcorollaries-7",
  "type": "Proof",
  "number": "3.4.2",
  "title": "",
  "body": " If divides and , then . Thus, any power of a prime dividing must also divide .  "
},
{
  "id": "def-gcdlcm",
  "level": "2",
  "url": "FTAcorollaries.html#def-gcdlcm",
  "type": "Definition",
  "number": "3.4.4",
  "title": "",
  "body": "  Let and be natural numbers. The greatest common divisor of and , denoted , is given by the largest natural number dividing both and . If , we say that and are coprime . The least common multiple of and , denoted , is given by the smallest natural number divisible by both and .   "
},
{
  "id": "FTAcorollaries-10",
  "level": "2",
  "url": "FTAcorollaries.html#FTAcorollaries-10",
  "type": "Checkpoint",
  "number": "3.4.5",
  "title": "",
  "body": " Find the greatest common divisor and the least common multiple for the following pairs of numbers.   5, 11    15, 36    367, 854     "
},
{
  "id": "prop-gcdlcmfactorizations",
  "level": "2",
  "url": "FTAcorollaries.html#prop-gcdlcmfactorizations",
  "type": "Proposition",
  "number": "3.4.6",
  "title": "",
  "body": "  Suppose and are natural numbers. If is a prime such that appears in the prime factorization of and appears in the prime factorization of , then:    appears in the prime factorization of , and     appears in the prime factorization of .      "
},
{
  "id": "FTAcorollaries-13",
  "level": "2",
  "url": "FTAcorollaries.html#FTAcorollaries-13",
  "type": "Proof",
  "number": "3.4.3",
  "title": "",
  "body": " The proposition is a consequence of the following two observations. The largest power of that divides both and is the minimum of the two exponents. The smallest power of that is divisible by both and is the maximum of the two exponents.  "
},
{
  "id": "FTAcorollaries-14",
  "level": "2",
  "url": "FTAcorollaries.html#FTAcorollaries-14",
  "type": "Checkpoint",
  "number": "3.4.7",
  "title": "",
  "body": " Discuss the above \"sketch\" of the proof with your group. Are you convinced by this? Do you feel it needs more details? Why or why not?  "
},
{
  "id": "thm-sqrt2irrational",
  "level": "2",
  "url": "FTAcorollaries.html#thm-sqrt2irrational",
  "type": "Theorem",
  "number": "3.4.8",
  "title": "",
  "body": "  The value is irrational.   "
},
{
  "id": "FTAcorollaries-17",
  "level": "2",
  "url": "FTAcorollaries.html#FTAcorollaries-17",
  "type": "Proof",
  "number": "3.4.4",
  "title": "",
  "body": " Suppose for a contradiction that for natural numbers and where the fraction is fully reduced; in other words, and are coprime. Then squaring both sides, we have that and therefore . However, this implies that there are an odd number of s in the prime factorization of the left side, while there are an even number in the prime factorization on the right. This is a contradiction, and therefore is not rational.  "
},
{
  "id": "ex-twelfthtwo",
  "level": "2",
  "url": "FTAcorollaries.html#ex-twelfthtwo",
  "type": "Checkpoint",
  "number": "3.4.9",
  "title": "",
  "body": "    Discuss this proof. Does it make sense? Why or why not?    Modify this proof to show that is irrational.     "
},
{
  "id": "thm-log32irrational",
  "level": "2",
  "url": "FTAcorollaries.html#thm-log32irrational",
  "type": "Theorem",
  "number": "3.4.10",
  "title": "",
  "body": "  The value is irrational.   "
},
{
  "id": "FTAcorollaries-20",
  "level": "2",
  "url": "FTAcorollaries.html#FTAcorollaries-20",
  "type": "Proof",
  "number": "3.4.5",
  "title": "",
  "body": " Suppose for contradiction that for coprime numbers and . Then we have that , which implies that This implies that which is impossible by the uniqueness of prime factorization, yielding the desired contradiction.  "
},
{
  "id": "FTAcorollaries-21",
  "level": "2",
  "url": "FTAcorollaries.html#FTAcorollaries-21",
  "type": "Checkpoint",
  "number": "3.4.11",
  "title": "",
  "body": " Discuss this proof. Does it make sense? Why or why not?  "
},
{
  "id": "harmonics",
  "level": "1",
  "url": "harmonics.html",
  "type": "Section",
  "number": "3.5",
  "title": "Harmonics",
  "body": " Harmonics  We are now able to develop our first applications of number theory to music theory, specifically the theory of harmonics and temperament. For a detailed treatment of mathematical aspects of music, including the way that the physiology of the ear influences perception of music, see David Benson's 2008 book Music: A Mathematical Offering .  Sound waves occur as sequences of high and low pressure moving through air, i.e., as an oscillation of pressure. Sound is perceived through our ears as a sequence of \"beats\" of pressure. The number of beats that is heard per second is the frequency of the wave, which is measured in Hertz . One Hertz, written as Hz, is equal to one beat per second. The human ear can perceive frequencies ranging from around 20 Hz to around 20,000 Hz.   An aside for those students who have musical experience: In this class, we will use the term \"frequency\" rather than \"pitch\", because they are technically different; pitch is the human perception of frequency, which does not always correspond accurately to the physical frequency. However, for typical musical purposes, the words pitch and frequency are used as synonyms.  We can experience \"pure\" sound waves using a tone generator, such as . Let's experiment listening to the following frequencies:   1 Hz using a square wave (this is 1 beat per second), then increase to 440 Hz (which is a concert \"A\" pitch).    20 Hz using a sine wave (this is a smoothly-varying pressure wave with 20 pressure beats per second), then increase to 880 Hz.     A natural way to think about sound waves is as a sequence of beats, or pulses of pressure. When those beats are synchronized in some way, they are aligned. For example, consider the sound of two simultaneous sine waves, one at 220 Hz and one at 440 Hz, using . What is happening is that we hear 220 beats per second from one wave, and 440 beats per second from another. Thus, these are impacting our ear in a synchronized manner.  Next, listen to what happens when we add another wave at 660 Hz, which is three times the original wave in frequency. This is the sound of three simultaneous sound waves, where the lowest has frequency Hz, and the other two have frequencies and .  We typically represent the sequence of beats as a sine wave. For example, the following figure shows four frequencies which are a fundamental frequency with a single peak, along with the sine waves corresponding to , , and .   Four frequencies, three of which are small multiples of the fundamental frequency.   Four sine waves where three are obtained as small multiples of the frequency of another.     Discuss the figure above. Does it make sense how the peaks and valleys of the sine wave correspond to the beats in a given time interval?   What happens when we cut out the original frequency, and only play the frequencies for and ? It sounds different, because the ratio of beats per second is different between and than between and . Specifically, when we listen to and , then we are hearing 2 beats of the second frequency for each beat of the first frequency, giving a ratio of . However, when we listen to and , then we are hearing 3 beats of the third frequency for every 2 beats of the second frequency, giving a ratio of . This leads us to a fundamental observation: when considering a pair of frequencies, what matters for our perception of their interaction is the ratio of their frequencies .   Discuss the following concepts with your group. What questions do you have about them?   Sound as sequences of \"beats\" of pressure in the air being sensed by our ears    Hertz as beats per second    Using the ratio between two frequencies to measure how those frequencies are related.      We are now in a position to give precise mathematical definitions for some musical terms.       Given two frequencies Hz and Hz, the interval from to is given by the ratio . If two ratios are equivalent as real numbers, then we say that they define the same interval.    Two frequencies differ by an octave if their interval is .    Two frequencies differ by a perfect fifth if their interval is .    Two frequencies differ by a perfect fourth if their interval is .    Two frequencies are said to produce equivalent notes if they differ by some number of octaves, i.e., and are equivalent notes if for some integer .    A scale is any sequence of notes starting at a root frequency and ending at the octave .           What frequency is two octaves above 236 Hz?    What frequency is one fifth above 440 Hz?    What frequency is three fifths above 220 Hz?    Suppose that the frequency is a fourth above a frequency . Show that the fifth above is , the octave above .    What frequency is one octave above the fifth above 440 Hz?    Show that the frequency is obtained by going up by two fifths from the frequency followed by going down by one octave from the resulting frequency.    Are the frequencies 440 Hz and 1740 Hz equivalent notes?      One thing that is important to know about musical sound is that when a string vibrates, it propagates sound waves at more than one frequency. In addition to the fundamental frequency that it generates, the vibrating string also generates the frequencies , , , and so on. These additional sound waves are called the harmonics of the fundamental frequency. The harmonics are produced with varying amplitudes (i.e., loudness) depending on how the string was struck\/activated\/excited\/etc. Thus, we are led to the following principle.    If a vibrating string has fundamental frequency , then it also produces harmonics of frequencies , , , and so on. Thus, the intervals that are heard when a string vibrates include the following intervals between consecutive harmonics:   an octave above , ratio , from to     a fifth above , ratio , from to     a fourth above , ratio , from to        Intervals, fifths, and fourths therefore are important harmonics that arise naturally in the sound produced by vibrating strings. As a result, these intervals play a fundamental role in many musical traditions around the world.  "
},
{
  "id": "fig-frequencies",
  "level": "2",
  "url": "harmonics.html#fig-frequencies",
  "type": "Figure",
  "number": "3.5.1",
  "title": "",
  "body": " Four frequencies, three of which are small multiples of the fundamental frequency.   Four sine waves where three are obtained as small multiples of the frequency of another.   "
},
{
  "id": "harmonics-10",
  "level": "2",
  "url": "harmonics.html#harmonics-10",
  "type": "Checkpoint",
  "number": "3.5.2",
  "title": "",
  "body": " Discuss the figure above. Does it make sense how the peaks and valleys of the sine wave correspond to the beats in a given time interval?  "
},
{
  "id": "harmonics-12",
  "level": "2",
  "url": "harmonics.html#harmonics-12",
  "type": "Checkpoint",
  "number": "3.5.3",
  "title": "",
  "body": " Discuss the following concepts with your group. What questions do you have about them?   Sound as sequences of \"beats\" of pressure in the air being sensed by our ears    Hertz as beats per second    Using the ratio between two frequencies to measure how those frequencies are related.     "
},
{
  "id": "def-intervals",
  "level": "2",
  "url": "harmonics.html#def-intervals",
  "type": "Definition",
  "number": "3.5.4",
  "title": "",
  "body": "     Given two frequencies Hz and Hz, the interval from to is given by the ratio . If two ratios are equivalent as real numbers, then we say that they define the same interval.    Two frequencies differ by an octave if their interval is .    Two frequencies differ by a perfect fifth if their interval is .    Two frequencies differ by a perfect fourth if their interval is .    Two frequencies are said to produce equivalent notes if they differ by some number of octaves, i.e., and are equivalent notes if for some integer .    A scale is any sequence of notes starting at a root frequency and ending at the octave .      "
},
{
  "id": "harmonics-15",
  "level": "2",
  "url": "harmonics.html#harmonics-15",
  "type": "Checkpoint",
  "number": "3.5.5",
  "title": "",
  "body": "    What frequency is two octaves above 236 Hz?    What frequency is one fifth above 440 Hz?    What frequency is three fifths above 220 Hz?    Suppose that the frequency is a fourth above a frequency . Show that the fifth above is , the octave above .    What frequency is one octave above the fifth above 440 Hz?    Show that the frequency is obtained by going up by two fifths from the frequency followed by going down by one octave from the resulting frequency.    Are the frequencies 440 Hz and 1740 Hz equivalent notes?     "
},
{
  "id": "principle-harmonics",
  "level": "2",
  "url": "harmonics.html#principle-harmonics",
  "type": "Principle",
  "number": "3.5.6",
  "title": "",
  "body": "  If a vibrating string has fundamental frequency , then it also produces harmonics of frequencies , , , and so on. Thus, the intervals that are heard when a string vibrates include the following intervals between consecutive harmonics:   an octave above , ratio , from to     a fifth above , ratio , from to     a fourth above , ratio , from to       "
},
{
  "id": "sec-temperament",
  "level": "1",
  "url": "sec-temperament.html",
  "type": "Section",
  "number": "3.6",
  "title": "Pythagorean Scales and Equal Temperament",
  "body": " Pythagorean Scales and Equal Temperament  Because of the critical role played by octaves and fifths, many ancient cultures developed musical scales generated by those intervals. However, it is important to note that there are an incredible diversity of musical scales that have been developed and used throughout the world, see for example the book Tuning, Timbre, Spectrum, Scale by William A. Sethares.  A scale is called if it is generated by octaves and fifths. As we will see, the Fundamental Theorem of Arithmetic forces such scales to have inherent dissonance, because of the answer to the following question.    If you start at a fundamental frequency and go up by fifths, do you ever reach a frequency that is an equivalent note to the one you started with?  Equivalently, suppose we start with a fundamental frequency and we consider the sequence of octaves for and fifths for . Are there values of and that produce the same frequency?     With your group, explore this question.     The frequencies generated from a fundamental by going up by fifths are never equivalent notes to the original frequency. In other words, there are no integer values of and such that .     Suppose for a contradiction that such values did exist. This would imply the following: Thus, we would have that , which would imply that is rational. However, we proved that this value is irrational in using the Fundamental Theorem of Arithmetic, which is a contradiction.    Discuss this proof with your group. Does it make sense? Why or why not?   This theorem has significant implications for music theory, because it implies that if we keep going up by fifths, we produce infinitely many different frequencies that are not equivalent by octaves. Thus, Pythagorean scales would either have to contain an infinite number of frequencies within a fixed octave, or else people would have to choose to include only some of the frequencies generated by going up by fifths (which is what was traditionally done). This inherent limitation of Pythagorean scales led to an extensive development of scales and tuning in the Western European musical tradition.  On a piano keyboard, there are twelve notes that repeat in each octave (one note for each key).   An image of a musical keyboard originally at this link .   An image of a musical keyboard.    Why does Western European music traditionally use twelve notes in each octave? The answer comes from the fact that going up by twelve fifth intervals results in a frequency that is very close to going up by seven octaves: Equivalently, This means that if we go up by fifths twelve times, we reach a frequency that is approximately seven octaves above the original frequency. Thus, by using twelve notes in each octave, we can approximate the Pythagorean scale while still having a finite number of notes.   Discuss the approximations above. Does it make sense why this motivated dividing the octave into twelve frequencies? If not, what questions do you have?   This observation led to extensive development of different types of tuning\/temperament, such as just intonation, meantone temperament, and well temperament, before the widespread adoption of equal temperament in the 19th century. What is done in equal temperament is to use a 12-note scale that spaces the frequencies completely evenly, meaning that the interval between any two consecutive frequencies is the same.  Mathematically, this is done by using a scaling factor to generate the scale with frequencies The question arises: what value of should be used? From the above line, we see that we need , so the appropriate value is .  We proved in that is irrational. Thus, the intervals in equal temperament are irrational multiples of the fundamental frequency, and therefore they do not line up exactly with the naturally occurring harmonics of a vibrating string. For example, if we start with a fundamental frequency of Hz (the concert \"A\" pitch), then the fifth in equal temperament is at frequency which is slightly off from the perfect fifth at Hz.  Thus, there is a trade-off that has been accepted in the musical tradition of Western Europe: by using equal temperament, we gain the ability to play in any key and have a consistent sound across all keys and across multiple octaves, at the cost of having intervals that are not perfectly in tune with the natural harmonics of a vibrating string. These compromises arise due to number theoretic properties of rational and irrational numbers, specifically due to the Fundamental Theorem of Arithmetic preventing sequences of fifths and octaves from aligning.  "
},
{
  "id": "assumption-octavesandfifths",
  "level": "2",
  "url": "sec-temperament.html#assumption-octavesandfifths",
  "type": "Question",
  "number": "3.6.1",
  "title": "",
  "body": "  If you start at a fundamental frequency and go up by fifths, do you ever reach a frequency that is an equivalent note to the one you started with?  Equivalently, suppose we start with a fundamental frequency and we consider the sequence of octaves for and fifths for . Are there values of and that produce the same frequency?   "
},
{
  "id": "sec-temperament-5",
  "level": "2",
  "url": "sec-temperament.html#sec-temperament-5",
  "type": "Checkpoint",
  "number": "3.6.2",
  "title": "",
  "body": " With your group, explore this question.  "
},
{
  "id": "thm-fifthoctaveissue",
  "level": "2",
  "url": "sec-temperament.html#thm-fifthoctaveissue",
  "type": "Theorem",
  "number": "3.6.3",
  "title": "",
  "body": "  The frequencies generated from a fundamental by going up by fifths are never equivalent notes to the original frequency. In other words, there are no integer values of and such that .   "
},
{
  "id": "sec-temperament-7",
  "level": "2",
  "url": "sec-temperament.html#sec-temperament-7",
  "type": "Proof",
  "number": "3.6.1",
  "title": "",
  "body": " Suppose for a contradiction that such values did exist. This would imply the following: Thus, we would have that , which would imply that is rational. However, we proved that this value is irrational in using the Fundamental Theorem of Arithmetic, which is a contradiction.  "
},
{
  "id": "sec-temperament-8",
  "level": "2",
  "url": "sec-temperament.html#sec-temperament-8",
  "type": "Checkpoint",
  "number": "3.6.4",
  "title": "",
  "body": " Discuss this proof with your group. Does it make sense? Why or why not?  "
},
{
  "id": "fig-keyboard",
  "level": "2",
  "url": "sec-temperament.html#fig-keyboard",
  "type": "Figure",
  "number": "3.6.5",
  "title": "",
  "body": " An image of a musical keyboard originally at this link .   An image of a musical keyboard.   "
},
{
  "id": "sec-temperament-13",
  "level": "2",
  "url": "sec-temperament.html#sec-temperament-13",
  "type": "Checkpoint",
  "number": "3.6.6",
  "title": "",
  "body": " Discuss the approximations above. Does it make sense why this motivated dividing the octave into twelve frequencies? If not, what questions do you have?  "
},
{
  "id": "divisionalgorithm",
  "level": "1",
  "url": "divisionalgorithm.html",
  "type": "Section",
  "number": "4.1",
  "title": "The Division Algorithm",
  "body": " The Division Algorithm  In this chapter, we will explore divisibility in the study of solving equations using integers and developing algorithms for effective computation. We begin with the following problem.    Which triples of positive integers have integer solutions and to the equation      Investigate which values of from to yield an integer solution for each of the following equations.                         When are integers, the equation is called a linear Diophantine equation . In general, a Diophantine equation is a polynomial equation with integer coefficients for which we study solutions that are integer values. A linear Diophantine equation is a linear equation with integer coefficients, where we want to find integer solutions. Diophantine equations are named after Diophantus of Alexandria, a Greek mathematician who made significant contributions to number theory.   A former University of Kentucky undergraduate math and classics double-major, Cyrus Hettle, conducted undergraduate research on Diophantus's work and published a nice article about it in the Journal of Humanistic Mathematics: Cyrus Hettle, \"The Symbolic and Mathematical Influence of Diophantus's Arithmetica,\" Journal of Humanistic Mathematics, Volume 5 Issue 1 (January 2015), pages 139-166. Available at: https:\/\/scholarship.claremont.edu\/jhm\/vol5\/iss1\/8    From your investigations with the previous checkpoint, you might have been led to conjecture that the equation has integer solutions if and only if is a multiple of the greatest common divisor of and . We will prove that this is true later in this chapter, but first we will develop a broad theory regarding both greatest common divisors and the solution of linear Diophantine equations. We will begin with the division algorithm , which is a simple but powerful tool in number theory.   The Division Algorithm   Let and be positive integers, i.e., . Then there exist unique integers and such that and .    Before we prove , let's give some names to the quantities involved. We call the quotient and the remainder when is divided by . Observe that if and only if divides , by the definition of divisibility.   Let and . Then by the division algorithm, there exist unique integers and such that and . In this case, we have and , since .    Find the quotient and remainder when each of the following integers is divided by the given divisor.    , .     , .     , .      While it might seem clear when doing examples that we can always find such integers and given and , neither this nor the uniqueness part of the theorem is immediately obvious. Let's provide a proof to verify this formally.   Consider the set which is the set of all positive multiples of that are greater than . We first want to show that this set is not the empty set. Since , we know that , so . Thus, By the well-ordering principle , since is a non-empty set of positive integers, it must have a smallest element; call this element .  Write for some , and note that by the minimality of . Then we have Subtracting from each part of this inequality yields So, define . Then we have and   To see that and are unique, suppose that there exist integers and such that with . Then we have Rearranging this equation yields If , then , so . But since , we have , which is a contradiction. Thus, we must have , which implies that as well. Therefore, the integers and are unique.    Discuss the proof with your group. Does it make sense? Why or why not?  Draw a diagram with a number line to justify that if then .   Let's put the division algorithm to work with several applications. The first is a method to test whether or not two numbers have the same remainder when divided by a positive integer .    Let . The numbers and have the same remainder when divided by if and only if .     For each of the following pairs of integers and , determine whether or not they have the same remainder when divided by the given value . Check this using both of the equivalent criteria in the theorem, i.e., first compute both their remainders and second check whether divides their difference.    , , .     , , .     , , .       We first prove that if and have the same remainder when divided by , then By the division algorithm, there exist unique integers such that with . Similarly, there exist unique integers such that with . Since and have the same remainder when divided by , we have . Thus, we have Therefore,   We next prove the converse, that is, we prove that if then and have the same remainder when divided by . Since there exists an integer such that By the division algorithm, there exist unique integers such that with . Similarly, there exist unique integers such that with . Substituting these expressions for and into the equation we have Rearranging this equation yields Since , the only way for to be a multiple of is if so that . Therefore, and have the same remainder when divided by .    Discuss the proof with your group. Does it make sense? Why or why not?   Our second application is related to prime numbers. We know that is the only even prime number, since every other even number is divisible by . An equivalent way to say this is that there are only finitely many primes that have remainder when divided by . What can we say about remainders of primes when divide by other numbers? Here is a classic result.   Dirichlet's Theorem on Arithmetic Progressions   Given any two positive integers and that are relatively prime, i.e., there are infinitely many primes that have remainder when divided by .    We should look at various examples of this theorem to get a feel for what it is saying, and examples can be found on the wikipedia page for Dirichlet's theorem .  A proof of Dirichlet's theorem is far beyond the scope of this course, but it shows that primes are widely distributed across all possible remainders when divided by a positive integer , as long as the remainder and the divisor are relatively prime. However, we will give a proof of a special case of this theorem that illustrates the main idea of the result.   Special case of Dirichlet's theorem   There are infinitely many primes that have remainder when divided by .    We will provide a proof given by Silverman's book A friendly introduction to number theory , which is also given on the wikipedia page for Dirichlet's theorem .   We will prove this in a similar manner to Euclid's proof that there are infinitely many primes. Specifically, we will construct an infinite sequence of primes that are of the form .  We will need a simple lemma first: suppose that are positive integers where each for some integer . Then the product is also of the form for some integer . We prove this by observing that the product of two numbers of the form is also of the form . Specifically, if and , then Thus, using an argument by induction, it can be shown that the product of any finite number of integers of the form is also of the form .  Now, suppose that we have a list of prime numbers of the form , say , where none of these primes are equal to . So, we can start with the prime . Define and observe that none of the primes divides . Note that would imply that , which is false, and would imply that , which is also false since none of the are equal to . Thus, any prime factor of must be of the form or .  If every prime factor of were of the form , then by our lemma, their product (which is equal to ) would also be of the form , which is a contradiction since is of the form . Therefore, must have at least one prime factor of the form that is not in our original list of primes.  We can then iterate this process to generate an infinite list of primes of the form .    Discuss the proof with your group. Does it make sense? Why or why not?    Start with the prime and use the method in the proof of to produce three primes of the form .   What is interesting is that Dirichlet's theorem on arithmetic progressions contrasts with what we know about the distribution of the primes throughout the integers, which is given in the following famous result.  In order to state this theorem, we need to introduce one piece of notation. Given two functions and defined on the positive integers, we write to mean that If , we say that and are asymptotically equivalent . In other words, the functions and are asymptotically equivalent if their ratio approaches as approaches infinity.  You have actually seen many examples in calculus of functions that are asymptotically equivalent. For example, consider the function and the function . Then we have so . Thus, for large values of , the function behaves like the function .   Discuss this definition and example with your group. Does it make sense? Why or why not?   It is important to note that the difference of two asymptotically equivalent functions does not necessarily approach as approaches infinity. For example, the difference between our functions and is which approaches infinity as approaches infinity. However, the ratio of to does approach .  So, two functions being asymptotically equivalent have the same rate of growth, meaning that the difference between them becomes insignificant compared to their size as becomes very large.   Does the distinction between limits of ratios and differences above make sense? Why or why not?    Prime Number Theorem   Recall that denotes the number of primes less than or equal to . Then we have where is the natural logarithm of .    What this says is that the fraction of the numbers between and that are prime is approximately .   Discuss with your group the following two questions.   Why does this mean that the fraction of the numbers between and that are prime is approximately ?    Why does imply that the fraction of the primes among the integers approaches as approaches infinity?   `   The big takeaway from these two theorems is that there is a tension between the fact that (A) the primes become more and more rare as we consider larger and larger numbers and (B) the primes are distributed in infinite quantities across all possible remainders when divided by a positive integer , as long as the remainder and the divisor are relatively prime.   Discuss with your group: do you agree that this is a tension? Why or why not? Are you surprised by either of these results?   As you can see, while writing a number in quotient-remainder form might seem simple, it has profound consequences in number theory. We will next use the division algorithm to develop the theory of greatest common divisors and to solve linear Diophantine equations.  "
},
{
  "id": "question-lineardiophantine",
  "level": "2",
  "url": "divisionalgorithm.html#question-lineardiophantine",
  "type": "Question",
  "number": "4.1.1",
  "title": "",
  "body": "  Which triples of positive integers have integer solutions and to the equation    "
},
{
  "id": "divisionalgorithm-4",
  "level": "2",
  "url": "divisionalgorithm.html#divisionalgorithm-4",
  "type": "Checkpoint",
  "number": "4.1.2",
  "title": "",
  "body": " Investigate which values of from to yield an integer solution for each of the following equations.                        "
},
{
  "id": "divisionalgorithm-6",
  "level": "2",
  "url": "divisionalgorithm.html#divisionalgorithm-6",
  "type": "Remark",
  "number": "4.1.3",
  "title": "",
  "body": " A former University of Kentucky undergraduate math and classics double-major, Cyrus Hettle, conducted undergraduate research on Diophantus's work and published a nice article about it in the Journal of Humanistic Mathematics: Cyrus Hettle, \"The Symbolic and Mathematical Influence of Diophantus's Arithmetica,\" Journal of Humanistic Mathematics, Volume 5 Issue 1 (January 2015), pages 139-166. Available at: https:\/\/scholarship.claremont.edu\/jhm\/vol5\/iss1\/8   "
},
{
  "id": "thm-divisionalgorithm",
  "level": "2",
  "url": "divisionalgorithm.html#thm-divisionalgorithm",
  "type": "Theorem",
  "number": "4.1.4",
  "title": "The Division Algorithm.",
  "body": " The Division Algorithm   Let and be positive integers, i.e., . Then there exist unique integers and such that and .   "
},
{
  "id": "divisionalgorithm-10",
  "level": "2",
  "url": "divisionalgorithm.html#divisionalgorithm-10",
  "type": "Example",
  "number": "4.1.5",
  "title": "",
  "body": " Let and . Then by the division algorithm, there exist unique integers and such that and . In this case, we have and , since .  "
},
{
  "id": "divisionalgorithm-11",
  "level": "2",
  "url": "divisionalgorithm.html#divisionalgorithm-11",
  "type": "Checkpoint",
  "number": "4.1.6",
  "title": "",
  "body": " Find the quotient and remainder when each of the following integers is divided by the given divisor.    , .     , .     , .     "
},
{
  "id": "divisionalgorithm-13",
  "level": "2",
  "url": "divisionalgorithm.html#divisionalgorithm-13",
  "type": "Proof",
  "number": "4.1.1",
  "title": "",
  "body": " Consider the set which is the set of all positive multiples of that are greater than . We first want to show that this set is not the empty set. Since , we know that , so . Thus, By the well-ordering principle , since is a non-empty set of positive integers, it must have a smallest element; call this element .  Write for some , and note that by the minimality of . Then we have Subtracting from each part of this inequality yields So, define . Then we have and   To see that and are unique, suppose that there exist integers and such that with . Then we have Rearranging this equation yields If , then , so . But since , we have , which is a contradiction. Thus, we must have , which implies that as well. Therefore, the integers and are unique.  "
},
{
  "id": "divisionalgorithm-14",
  "level": "2",
  "url": "divisionalgorithm.html#divisionalgorithm-14",
  "type": "Checkpoint",
  "number": "4.1.7",
  "title": "",
  "body": " Discuss the proof with your group. Does it make sense? Why or why not?  Draw a diagram with a number line to justify that if then .  "
},
{
  "id": "thm-remainderequivalence",
  "level": "2",
  "url": "divisionalgorithm.html#thm-remainderequivalence",
  "type": "Theorem",
  "number": "4.1.8",
  "title": "",
  "body": "  Let . The numbers and have the same remainder when divided by if and only if .   "
},
{
  "id": "divisionalgorithm-17",
  "level": "2",
  "url": "divisionalgorithm.html#divisionalgorithm-17",
  "type": "Checkpoint",
  "number": "4.1.9",
  "title": "",
  "body": " For each of the following pairs of integers and , determine whether or not they have the same remainder when divided by the given value . Check this using both of the equivalent criteria in the theorem, i.e., first compute both their remainders and second check whether divides their difference.    , , .     , , .     , , .     "
},
{
  "id": "divisionalgorithm-18",
  "level": "2",
  "url": "divisionalgorithm.html#divisionalgorithm-18",
  "type": "Proof",
  "number": "4.1.2",
  "title": "",
  "body": " We first prove that if and have the same remainder when divided by , then By the division algorithm, there exist unique integers such that with . Similarly, there exist unique integers such that with . Since and have the same remainder when divided by , we have . Thus, we have Therefore,   We next prove the converse, that is, we prove that if then and have the same remainder when divided by . Since there exists an integer such that By the division algorithm, there exist unique integers such that with . Similarly, there exist unique integers such that with . Substituting these expressions for and into the equation we have Rearranging this equation yields Since , the only way for to be a multiple of is if so that . Therefore, and have the same remainder when divided by .  "
},
{
  "id": "divisionalgorithm-19",
  "level": "2",
  "url": "divisionalgorithm.html#divisionalgorithm-19",
  "type": "Checkpoint",
  "number": "4.1.10",
  "title": "",
  "body": " Discuss the proof with your group. Does it make sense? Why or why not?  "
},
{
  "id": "thm-dirichletarithmeticprogressions",
  "level": "2",
  "url": "divisionalgorithm.html#thm-dirichletarithmeticprogressions",
  "type": "Theorem",
  "number": "4.1.11",
  "title": "Dirichlet’s Theorem on Arithmetic Progressions.",
  "body": " Dirichlet's Theorem on Arithmetic Progressions   Given any two positive integers and that are relatively prime, i.e., there are infinitely many primes that have remainder when divided by .   "
},
{
  "id": "thm-threemodfourprimes",
  "level": "2",
  "url": "divisionalgorithm.html#thm-threemodfourprimes",
  "type": "Theorem",
  "number": "4.1.12",
  "title": "Special case of Dirichlet’s theorem.",
  "body": " Special case of Dirichlet's theorem   There are infinitely many primes that have remainder when divided by .   "
},
{
  "id": "divisionalgorithm-26",
  "level": "2",
  "url": "divisionalgorithm.html#divisionalgorithm-26",
  "type": "Proof",
  "number": "4.1.3",
  "title": "",
  "body": " We will prove this in a similar manner to Euclid's proof that there are infinitely many primes. Specifically, we will construct an infinite sequence of primes that are of the form .  We will need a simple lemma first: suppose that are positive integers where each for some integer . Then the product is also of the form for some integer . We prove this by observing that the product of two numbers of the form is also of the form . Specifically, if and , then Thus, using an argument by induction, it can be shown that the product of any finite number of integers of the form is also of the form .  Now, suppose that we have a list of prime numbers of the form , say , where none of these primes are equal to . So, we can start with the prime . Define and observe that none of the primes divides . Note that would imply that , which is false, and would imply that , which is also false since none of the are equal to . Thus, any prime factor of must be of the form or .  If every prime factor of were of the form , then by our lemma, their product (which is equal to ) would also be of the form , which is a contradiction since is of the form . Therefore, must have at least one prime factor of the form that is not in our original list of primes.  We can then iterate this process to generate an infinite list of primes of the form .  "
},
{
  "id": "divisionalgorithm-27",
  "level": "2",
  "url": "divisionalgorithm.html#divisionalgorithm-27",
  "type": "Checkpoint",
  "number": "4.1.13",
  "title": "",
  "body": " Discuss the proof with your group. Does it make sense? Why or why not?  "
},
{
  "id": "divisionalgorithm-28",
  "level": "2",
  "url": "divisionalgorithm.html#divisionalgorithm-28",
  "type": "Checkpoint",
  "number": "4.1.14",
  "title": "",
  "body": " Start with the prime and use the method in the proof of to produce three primes of the form .  "
},
{
  "id": "divisionalgorithm-32",
  "level": "2",
  "url": "divisionalgorithm.html#divisionalgorithm-32",
  "type": "Checkpoint",
  "number": "4.1.15",
  "title": "",
  "body": " Discuss this definition and example with your group. Does it make sense? Why or why not?  "
},
{
  "id": "divisionalgorithm-35",
  "level": "2",
  "url": "divisionalgorithm.html#divisionalgorithm-35",
  "type": "Checkpoint",
  "number": "4.1.16",
  "title": "",
  "body": " Does the distinction between limits of ratios and differences above make sense? Why or why not?  "
},
{
  "id": "thm-primenumbertheorem",
  "level": "2",
  "url": "divisionalgorithm.html#thm-primenumbertheorem",
  "type": "Theorem",
  "number": "4.1.17",
  "title": "Prime Number Theorem.",
  "body": " Prime Number Theorem   Recall that denotes the number of primes less than or equal to . Then we have where is the natural logarithm of .   "
},
{
  "id": "divisionalgorithm-38",
  "level": "2",
  "url": "divisionalgorithm.html#divisionalgorithm-38",
  "type": "Checkpoint",
  "number": "4.1.18",
  "title": "",
  "body": " Discuss with your group the following two questions.   Why does this mean that the fraction of the numbers between and that are prime is approximately ?    Why does imply that the fraction of the primes among the integers approaches as approaches infinity?   `  "
},
{
  "id": "divisionalgorithm-40",
  "level": "2",
  "url": "divisionalgorithm.html#divisionalgorithm-40",
  "type": "Checkpoint",
  "number": "4.1.19",
  "title": "",
  "body": " Discuss with your group: do you agree that this is a tension? Why or why not? Are you surprised by either of these results?  "
},
{
  "id": "euclideanalgorithm",
  "level": "1",
  "url": "euclideanalgorithm.html",
  "type": "Section",
  "number": "4.2",
  "title": "The Euclidean Algorithm",
  "body": " The Euclidean Algorithm  We started the previous section by looking at linear Diophantine equations of the form , where , , and are given integers and we want to find integer solutions . What we observed is that there seems to be a connection between the solvability of this equation and the greatest common divisor of and , which we will establish in detail later in this chapter. In this section, we will develop the theory of greatest common divisors using the division algorithm, which we will need for our study of linear Diophantine equations.  Recall that in we showed how to compute the greatest common divisor of two numbers if you know the prime factorizations of those numbers. Unfortunately, it is famously difficult to find the prime factorization of large numbers. In fact, the security of many modern cryptographic systems relies on this difficulty, see https:\/\/en.wikipedia.org\/wiki\/Integer_factorization for more information. So, we need to find a better way to compute greatest common divisors without having to factor the numbers first.  Fortunately, this was first accomplished by the ancient Greek mathematician Euclid around 300 BC. This is the same Euclid who wrote The Elements , one of the most influential works in the history of mathematics, and whose proof of the infinitude of primes we saw previously in the course.  The idea of the Euclidean algorithm is to apply the division algorithm repeatedly. Why does this help us? It is because the division algorithm is closely related to the greatest common divisor, as the following lemma shows.    Let and be positive integers and use the division algorithm to write for some integers and with . Then .    Let's look at an example. Suppose and . Using the division algorithm, we can write . According to the lemma, we have .   Verify the lemma on the following pairs. You might want to use https:\/\/sagecell.sagemath.org\/ with the command gcd(a,b) to help find the greatest common divisors. Also, the command a % b computes the remainder when is divided by . Finally, the command N(a\/b) computes the decimal approximation to the quotient , which you can round down to find .    ,      ,      ,        We first show that any common divisor of and is also a common divisor of and . Let be a common divisor of and . Then and for some integers and . Substituting into the equation gives , which implies . Thus, divides , and so is a common divisor of and .  We next show that any common divisor of and is also a common divisor of and . Let be a common divisor of and . Then and for some integers and . Substituting into the equation gives , which implies . Thus, divides , and so is a common divisor of and .  Since the sets of common divisors of and and of and are the same, their greatest common divisors must also be the same.    Discuss this proof with your group. Does it make sense? Why or why not?   So, how does the Euclidean algorithm work? It works by allowing us to replace the pair by the smaller pair without changing the greatest common divisor. We can repeat this process until the remainder is zero. At that point, the other number is the greatest common divisor. Let's do an example before we write down the algorithm formally.  Suppose and .   Using the division algorithm, we have . Thus,     Next, we apply the division algorithm again to get . So, .    Next, we have , so .    Next, we have , so .    Next, we have , so .    Finally, we have , so . Thus, tracing back through all the equalities of the gcd's, we have       Discuss this example with your group. Does it make sense? Why or why not?    Use this approach to compute the greatest common divisor of and .   Let's now give a formal description of the Euclidean algorithm.   The Euclidean Algorithm   Suppose that and are positive integers with . The Euclidean algorithm computes as follows:   Use the division algorithm to write for some integers and with .    If , then stop and output as the greatest common divisor. Otherwise, continue to the next step.    Use the division algorithm to write for some integers and with .    If , then stop and output as the greatest common divisor. Otherwise, continue to the next step.    Continue this process, at each step using the division algorithm to divide the previous divisor by the previous remainder, until a remainder of zero is obtained. The last nonzero remainder is the greatest common divisor .        The correctness of the algorithm follows by repeated application of .   Let's think a little bit about the practical efficiency of the Euclidean algorithm. Intuitively, if we have a step where the quotient is large, then we quickly reduce the size of the numbers we are working with. On the other hand, if the quotients are all small, then we reduce the size of the numbers more slowly. So, what happens in the case where every quotient is as small as possible, that is, every quotient is equal to 1?  Suppose that and that every quotient in the Euclidean algorithm is equal to 1. Suppose that with our first step we have , and with our second step we have , and with our third step we have , and so on. Eventually, we will reach a final step where , so that . If we rewrite all of these equations, we get that , , , , , , and so on. In other words, we start with the numbers and , and each new number is the sum of the previous two numbers.   Discuss this computation. Does it make sense? Why or why not?   The numbers that arise from this process are the following.    Let and , and for each integer , let . The resulting sequence of numbers are called the Fibonacci numbers .    Our calculation above proves the following theorem.    If the Euclidean algorithm is applied to two relatively prime positive integers and with and every quotient in the algorithm is equal to , then and are consecutive Fibonacci numbers.    In the next section, we will investigate a connection between the Euclidean algorithm and linear Diophantine equations.  "
},
{
  "id": "lem-divisionalgorithmgcd",
  "level": "2",
  "url": "euclideanalgorithm.html#lem-divisionalgorithmgcd",
  "type": "Lemma",
  "number": "4.2.1",
  "title": "",
  "body": "  Let and be positive integers and use the division algorithm to write for some integers and with . Then .   "
},
{
  "id": "euclideanalgorithm-8",
  "level": "2",
  "url": "euclideanalgorithm.html#euclideanalgorithm-8",
  "type": "Checkpoint",
  "number": "4.2.2",
  "title": "",
  "body": " Verify the lemma on the following pairs. You might want to use https:\/\/sagecell.sagemath.org\/ with the command gcd(a,b) to help find the greatest common divisors. Also, the command a % b computes the remainder when is divided by . Finally, the command N(a\/b) computes the decimal approximation to the quotient , which you can round down to find .    ,      ,      ,      "
},
{
  "id": "euclideanalgorithm-9",
  "level": "2",
  "url": "euclideanalgorithm.html#euclideanalgorithm-9",
  "type": "Proof",
  "number": "4.2.1",
  "title": "",
  "body": " We first show that any common divisor of and is also a common divisor of and . Let be a common divisor of and . Then and for some integers and . Substituting into the equation gives , which implies . Thus, divides , and so is a common divisor of and .  We next show that any common divisor of and is also a common divisor of and . Let be a common divisor of and . Then and for some integers and . Substituting into the equation gives , which implies . Thus, divides , and so is a common divisor of and .  Since the sets of common divisors of and and of and are the same, their greatest common divisors must also be the same.  "
},
{
  "id": "euclideanalgorithm-10",
  "level": "2",
  "url": "euclideanalgorithm.html#euclideanalgorithm-10",
  "type": "Checkpoint",
  "number": "4.2.3",
  "title": "",
  "body": " Discuss this proof with your group. Does it make sense? Why or why not?  "
},
{
  "id": "euclideanalgorithm-13",
  "level": "2",
  "url": "euclideanalgorithm.html#euclideanalgorithm-13",
  "type": "Checkpoint",
  "number": "4.2.4",
  "title": "",
  "body": " Discuss this example with your group. Does it make sense? Why or why not?  "
},
{
  "id": "euclideanalgorithm-14",
  "level": "2",
  "url": "euclideanalgorithm.html#euclideanalgorithm-14",
  "type": "Checkpoint",
  "number": "4.2.5",
  "title": "",
  "body": " Use this approach to compute the greatest common divisor of and .  "
},
{
  "id": "alg-euclideanalgorithm",
  "level": "2",
  "url": "euclideanalgorithm.html#alg-euclideanalgorithm",
  "type": "Algorithm",
  "number": "4.2.6",
  "title": "The Euclidean Algorithm.",
  "body": " The Euclidean Algorithm   Suppose that and are positive integers with . The Euclidean algorithm computes as follows:   Use the division algorithm to write for some integers and with .    If , then stop and output as the greatest common divisor. Otherwise, continue to the next step.    Use the division algorithm to write for some integers and with .    If , then stop and output as the greatest common divisor. Otherwise, continue to the next step.    Continue this process, at each step using the division algorithm to divide the previous divisor by the previous remainder, until a remainder of zero is obtained. The last nonzero remainder is the greatest common divisor .      "
},
{
  "id": "euclideanalgorithm-17",
  "level": "2",
  "url": "euclideanalgorithm.html#euclideanalgorithm-17",
  "type": "Proof",
  "number": "4.2.2",
  "title": "",
  "body": " The correctness of the algorithm follows by repeated application of .  "
},
{
  "id": "euclideanalgorithm-20",
  "level": "2",
  "url": "euclideanalgorithm.html#euclideanalgorithm-20",
  "type": "Checkpoint",
  "number": "4.2.7",
  "title": "",
  "body": " Discuss this computation. Does it make sense? Why or why not?  "
},
{
  "id": "def-fibonaccinumbers",
  "level": "2",
  "url": "euclideanalgorithm.html#def-fibonaccinumbers",
  "type": "Definition",
  "number": "4.2.8",
  "title": "",
  "body": "  Let and , and for each integer , let . The resulting sequence of numbers are called the Fibonacci numbers .   "
},
{
  "id": "thm-fibonaccieuclidean",
  "level": "2",
  "url": "euclideanalgorithm.html#thm-fibonaccieuclidean",
  "type": "Theorem",
  "number": "4.2.9",
  "title": "",
  "body": "  If the Euclidean algorithm is applied to two relatively prime positive integers and with and every quotient in the algorithm is equal to , then and are consecutive Fibonacci numbers.   "
},
{
  "id": "bezoutidentity",
  "level": "1",
  "url": "bezoutidentity.html",
  "type": "Section",
  "number": "4.3",
  "title": "The Bezout Identity",
  "body": " The Bezout Identity  We now arrive at a beautiful result known as the Bézout identity.   Bézout Identity   Let with not both and . There exist such that         Find values and such that     Find values and such that     Find values and such that       Let's think about this equation for a moment.  We know that the greatest common divisor of and divides both and , thus it divides . So, any number of the form must be a multiple of .  The Bézout identity says that there is some choice of and such that is exactly equal to . In other words, the smallest possible integer that one could get from the expression , which is , is always obtainable using some integers and .  This is a remarkable fact, and it has many applications in number theory and beyond. In this section, we will give three different proofs of the Bézout identity, each highlighting a different proof technique.  For our first proof, we will use the Euclidean algorithm to construct the integers and needed for the identity.   Proof of Bézout Using the Euclidean Algorithm  Suppose that the Euclidean algorithm applied to produces nonzero remainders, i.e., that we have the following sequence of equations: Thus, we have that .  We can write in terms of and by rearranging the first two equations: Similarly, we can write in terms of and by substituting our expressions for and into the third equation: For simplicity, let's denote the coefficients of and in these expressions as follows: Similarly, we can write in terms of and by substituting our expressions for and into the fourth equation: where in the last equation we have defined and . Continuing in this manner, we can express each remainder as for some integers . In particular, we have that for some integers . Since , we have found integers and such that This completes the proof of the Bézout identity using the Euclidean algorithm.      Discuss the proof with your group. Does it make sense? Why or why not?    Use the technique from the proof to find integers and such that      We will next look at a proof of the Bézout identity using the well-ordering principle, which is completely different from the previous proof. The difference is that the proof using the Euclidean algorithm is constructive: it shows us how to find the integers and . In contrast, the proof using the well-ordering principle is non-constructive: it shows us that such integers must exist, but does not provide a method for finding them.   Proof of Bézout Identity using the well-ordering principle  Consider the set of all positive integers that can be expressed in the form for some integers and : Observe that is non-empty since, for example, we can take and to get . Thus, by the well-ordering principle, has a smallest element. Our goal is to show that is the smallest element of .  Call the smallest element of by the name . If we divide by , we get a quotient and a remainder such that with . We know that there exist integers and such that Substituting this into the equation for , we have: Rearranging, we find that: Since is expressed in the form for some integers and , it follows that if , then . But this contradicts the minimality of since . Therefore, we must have , which means that divides . By a similar argument, we can show that divides . Thus, is a common divisor of and .  It follows that . However, we also know that divides both and , and thus divides . Therefore, divides , which implies that . Combining these inequalities, we conclude that . This completes the proof.    Discuss the proof with your group. Does it make sense? Why or why not?   The third proof we will look at is similar in spirit to the proof using the Euclidean algorithm, but it is written as an inductive proof using only the division algorithm.   Proof of Bézout Identity using Induction  We will prove the Bézout identity by strong induction on . For the base cases, suppose first that . Without loss of generality, assume that . Then . We can write , so the Bézout identity holds. Second, suppose that . Without loss of generality, assume that . Then . We can write , so the Bézout identity holds.  For the inductive step, assume that the Bézout identity holds for all pairs of non-negative integers with for some . Now consider a pair of non-negative integers with . Without loss of generality, assume that . By the division algorithm, we can write for some integers and . Note that since . By the inductive hypothesis, there exist integers and such that Since and , we have: Thus, setting and , we have found integers and such that This completes the inductive step and thus the proof of the Bézout identity.    Discuss the proof with your group. Does it make sense? Why or why not?    Discuss the following questions with your group.   Which of these three proofs did you like the most? Why?    Which of these three proofs did you find the most informative\/insightful\/enlightening? Why?    Which of these three proofs did you find the most difficult to understand? Why?      We will end with a corollary that strengthens our understanding of the greatest common divisor.    If divides both and , then divides .     Use the Bézout identity to write for some integers and . Since divides both and , it divides and . Therefore, divides the sum , which is equal to .   This corollary tells us that not only is the greatest common divisor the largest divisor of and , but every divisor of and must also be a divisor of the greatest common divisor.   Discuss the corollary and its proof with your group. Does it make sense? Why or why not?   Now that we have the Bézout identity, we are in a position to classify all the solutions to linear Diophantine equations of the form , which we will do in the next section.  "
},
{
  "id": "thm-bezoutidentity",
  "level": "2",
  "url": "bezoutidentity.html#thm-bezoutidentity",
  "type": "Theorem",
  "number": "4.3.1",
  "title": "Bézout Identity.",
  "body": " Bézout Identity   Let with not both and . There exist such that    "
},
{
  "id": "bezoutidentity-4",
  "level": "2",
  "url": "bezoutidentity.html#bezoutidentity-4",
  "type": "Checkpoint",
  "number": "4.3.2",
  "title": "",
  "body": "    Find values and such that     Find values and such that     Find values and such that      "
},
{
  "id": "bezoutidentity-7",
  "level": "2",
  "url": "bezoutidentity.html#bezoutidentity-7",
  "type": "Proof",
  "number": "4.3.1",
  "title": "Proof of Bézout Using the Euclidean Algorithm.",
  "body": " Proof of Bézout Using the Euclidean Algorithm  Suppose that the Euclidean algorithm applied to produces nonzero remainders, i.e., that we have the following sequence of equations: Thus, we have that .  We can write in terms of and by rearranging the first two equations: Similarly, we can write in terms of and by substituting our expressions for and into the third equation: For simplicity, let's denote the coefficients of and in these expressions as follows: Similarly, we can write in terms of and by substituting our expressions for and into the fourth equation: where in the last equation we have defined and . Continuing in this manner, we can express each remainder as for some integers . In particular, we have that for some integers . Since , we have found integers and such that This completes the proof of the Bézout identity using the Euclidean algorithm.  "
},
{
  "id": "bezoutidentity-8",
  "level": "2",
  "url": "bezoutidentity.html#bezoutidentity-8",
  "type": "Checkpoint",
  "number": "4.3.3",
  "title": "",
  "body": "   Discuss the proof with your group. Does it make sense? Why or why not?    Use the technique from the proof to find integers and such that     "
},
{
  "id": "bezoutidentity-10",
  "level": "2",
  "url": "bezoutidentity.html#bezoutidentity-10",
  "type": "Proof",
  "number": "4.3.2",
  "title": "Proof of Bézout Identity using the well-ordering principle.",
  "body": " Proof of Bézout Identity using the well-ordering principle  Consider the set of all positive integers that can be expressed in the form for some integers and : Observe that is non-empty since, for example, we can take and to get . Thus, by the well-ordering principle, has a smallest element. Our goal is to show that is the smallest element of .  Call the smallest element of by the name . If we divide by , we get a quotient and a remainder such that with . We know that there exist integers and such that Substituting this into the equation for , we have: Rearranging, we find that: Since is expressed in the form for some integers and , it follows that if , then . But this contradicts the minimality of since . Therefore, we must have , which means that divides . By a similar argument, we can show that divides . Thus, is a common divisor of and .  It follows that . However, we also know that divides both and , and thus divides . Therefore, divides , which implies that . Combining these inequalities, we conclude that . This completes the proof.  "
},
{
  "id": "bezoutidentity-11",
  "level": "2",
  "url": "bezoutidentity.html#bezoutidentity-11",
  "type": "Checkpoint",
  "number": "4.3.4",
  "title": "",
  "body": " Discuss the proof with your group. Does it make sense? Why or why not?  "
},
{
  "id": "bezoutidentity-13",
  "level": "2",
  "url": "bezoutidentity.html#bezoutidentity-13",
  "type": "Proof",
  "number": "4.3.3",
  "title": "Proof of Bézout Identity using Induction.",
  "body": " Proof of Bézout Identity using Induction  We will prove the Bézout identity by strong induction on . For the base cases, suppose first that . Without loss of generality, assume that . Then . We can write , so the Bézout identity holds. Second, suppose that . Without loss of generality, assume that . Then . We can write , so the Bézout identity holds.  For the inductive step, assume that the Bézout identity holds for all pairs of non-negative integers with for some . Now consider a pair of non-negative integers with . Without loss of generality, assume that . By the division algorithm, we can write for some integers and . Note that since . By the inductive hypothesis, there exist integers and such that Since and , we have: Thus, setting and , we have found integers and such that This completes the inductive step and thus the proof of the Bézout identity.  "
},
{
  "id": "bezoutidentity-14",
  "level": "2",
  "url": "bezoutidentity.html#bezoutidentity-14",
  "type": "Checkpoint",
  "number": "4.3.5",
  "title": "",
  "body": " Discuss the proof with your group. Does it make sense? Why or why not?  "
},
{
  "id": "bezoutidentity-15",
  "level": "2",
  "url": "bezoutidentity.html#bezoutidentity-15",
  "type": "Checkpoint",
  "number": "4.3.6",
  "title": "",
  "body": " Discuss the following questions with your group.   Which of these three proofs did you like the most? Why?    Which of these three proofs did you find the most informative\/insightful\/enlightening? Why?    Which of these three proofs did you find the most difficult to understand? Why?     "
},
{
  "id": "cor-gcddivisors",
  "level": "2",
  "url": "bezoutidentity.html#cor-gcddivisors",
  "type": "Corollary",
  "number": "4.3.7",
  "title": "",
  "body": "  If divides both and , then divides .   "
},
{
  "id": "bezoutidentity-18",
  "level": "2",
  "url": "bezoutidentity.html#bezoutidentity-18",
  "type": "Proof",
  "number": "4.3.4",
  "title": "",
  "body": " Use the Bézout identity to write for some integers and . Since divides both and , it divides and . Therefore, divides the sum , which is equal to .  "
},
{
  "id": "bezoutidentity-20",
  "level": "2",
  "url": "bezoutidentity.html#bezoutidentity-20",
  "type": "Checkpoint",
  "number": "4.3.8",
  "title": "",
  "body": " Discuss the corollary and its proof with your group. Does it make sense? Why or why not?  "
},
{
  "id": "lineardiophantine",
  "level": "1",
  "url": "lineardiophantine.html",
  "type": "Section",
  "number": "4.4",
  "title": "Linear Diophantine Equations",
  "body": " Linear Diophantine Equations    "
},
{
  "id": "euclideanrhythms",
  "level": "1",
  "url": "euclideanrhythms.html",
  "type": "Section",
  "number": "4.5",
  "title": "Euclidean Rhythms",
  "body": " Euclidean Rhythms    "
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
  "body": " Problems and Essays   Essay 1  Go to and download the book Proof and Proving in Mathematics Education . Your essay will be a response to parts of Chapter 2, titled \"Cognitive Development of Proof\". Read the following sections of this chapter:   Section 2, \"Perceptions of Proof\", including both Subsections 2.1 and 2.2, page numbers 14-16.    Subsection 3.3, \"A Global Framework for the Development of Mathematical Thinking\", page numbers 23-25.   After you read these sections, complete the following essay.   This will be an essay of length at least 500 words, which is equivalent to at least 2 typed pages with 1 inch margins, 12 point Times New Roman font, double spaced. (You can write a longer essay if needed.)    Your essay should respond to the following three questions.   What are 2-3 experiences you have with mathematical proofs in your previous mathematics courses (both high school and college)? How do these experiences relate to the discussion of proof for mathematicians and for growing individuals discussed in Section 2 of the article?    What are examples of work you have done in your previous mathematics courses that represent \"embodied\", \"symbolic\", and \"formal\" modes of mathematical thinking, as described in Subsection 3.3 of the article?    What is one thing that you read in these sections that made sense to you? Why? What is one thing that you read in these sections that did not make sense to you? Why was it confusing? What questions do you have about it?      Your grade is based on completion only (in other words, if you complete the assignment and it meets the length requirement and responds appropriately to the prompt, then you get full credit).    P1  For a real number , define the floor function  to be the greatest integer less than or equal to . For example, , , and . The SageMath command to compute the floor is \"floor(x)\".  Let and be positive integers. The goal of this problem is to explore why the number of multiples of between and (inclusive) is given by .   Draw a picture using the number line that demonstrates why this is true for and . Explain in words why your picture shows that this is true.    Draw a more generic picture using the number line that demonstrates why this is true for any and . Explain in words why your picture shows that this is true.    Explain why this is true using only symbols and words.       P2  In this problem, you will complete several computational exercises using SageMath. Before starting this problem, you should read . These exercises will require you to modify the code found in that section.  To submit your solutions, upload to Canvas either (A) a document with screenshots of your code and output, or (B) a link to a Jupyter notebook with your work.   Produce a list of all the numbers from 1 to 200 that are divisible by 10.    Produce a plot of the points for all between 1 and 400 that are divisible by 3 but not divisible by 5 or 7.    How many numbers between and are divisible by 23 but not divisible by 17 or 29?       P3  Consider the equation    Draw a picture that demonstrates why this is true for all positive integers . Explain how your picture is related to the equation. (This is an \"embodied\" proof.)    Give a \"symbolic\" proof of this equation by rewriting the numbers in the sum and using properties of sums that we have discussed in class. Hint: write each odd number as .    Hint: Begin both of these with small examples. What happens when ? How can you use these examples to guide your thinking about the general case?     P4  Use induction to prove that is true for all .    P5  Recall that .   Do a computational experiment comparing the values of and for . The command in SageMath for is \"factorial(n)\", while the command for is \"2^n\". Provide either a screenshot or printout or notebook link for your code and results.    State a precise conjecture in response to the following question: is one of these functions eventually larger than the other?    Use induction to prove your conjecture.       Essay 2  Watch the following video from 3Blue1Brown (19 minutes, published July 2023): After you watch this video, complete the following essay.   This will be an essay of length 500 words, which is equivalent to 2 typed pages with 1 inch margins, 12 point Times New Roman font, double spaced.    The video introduced three false proofs, one related to spherical surface area, one related to finding the value of , and one supposedly proving that all triangles are equilateral. Which of these three false proofs did you find most interesting, and why? Which of these three false proofs did you find least interesting, and why? You need to give specific details in the video that support your opinions.    What is something about mathematical proof that this video made you consider that you had not thought of before? Do you feel that this new insight will help you as you work on proofs in this course? Why or why not?    How are the ideas of the embodied, symbolic, and formal modes of mathematical thinking (from the reading for Essay 1) related to the ideas introduced in this video? Does this video make you think differently about these modes of mathematical thinking? Why or why not?   Your grade is based on completion only (in other words, if you complete the assignment and it meets the length requirement and responds appropriately to the prompt, then you get full credit).    P6  The Sylvester sequence is the sequence of positive integers defined by and for all .   Prove by induction on that for all , we have .    Prove that if is a prime number that divides for some , then does not divide for any . Explain why this implies that there are infinitely many prime numbers.    Explain in a few sentences how the Sylvester sequence is related to Euclid's proof of the infinitude of primes.       P7  We will show in this problem how the fundamental theorem of arithmetic can be used to prove that there are infinitely many primes. Recall that is the number of primes less than or equal to . This problem will lead you through the steps of a proof due to Paul Erdős.   Prove that every integer can be expressed as , where and are positive integers and is square-free (meaning that no prime number divides more than once).    Prove that there are at most square-free integers less than or equal to .    Prove that there are at most integers less than or equal to that are of the form for some positive integer .    Use the previous parts to prove that for all positive integers .    Show that the inequality in the previous part implies that for all .    Explain why this proves that there are infinitely many prime numbers.       P8  The following problem is an open problem in mathematics, meaning that it is a problem that has not been solved by anyone. The Euclid-Mullin sequence is the sequence of prime numbers that starts with and continues by taking the smallest prime number produced by a Euclid step, as defined in . Thus, the Euclid-Mullin sequence starts with If you are interested, you can read about this sequence at .  The open problem is: Does every prime number appear in the Euclid-Mullin sequence? For example, no one knows whether or not the prime is produced by this process.  Make as much progress as you can on this open problem; I don't expect you to find a solution, but you should spend 2-3 hours thinking about this! Your goal is to do something more than check examples; the examples should lead you to make some interesting observations about the problem, to understand it a bit better. Why do you think it might be true? Why might it be false? Are there any properties of binomial coefficients that support your comments? Are there any positive integers for which this is obviously true? You can do this using only pencil and paper, or using mostly computational experiments, or you can use a mix of these. However, you need to provide a narrative in sentences\/paragraphs explaining your thinking and the results of your investigations. (Seriously, write down everything you're thinking and every idea you try, even if it doesn't go anywhere.)    P9  We say a divisor of a positive integer is a positive integer such that . The sum of divisors function is defined to be the sum of all the divisors of . For example, the divisors of are , so .   Suppose for some prime number and some positive integer . Prove that . Then, use this to prove that .    Suppose is the prime factorization of . Prove that     Use the previous two parts to find the values of and .       P10  Let be a positive integer. Consider the sequence of numbers given by Prove that this sequence does not contain any prime number. Explain why this shows that there are arbitrarily long sequences of consecutive composite numbers.    P11     Prove that the polynomial is divisible by for all positive integers and .    Use the first part to prove that if is a composite number, then is also a composite number.       P12      P13      P14      P15      P16      P17      Essay 3  Read the following blog post by Keith Weber, a professor of math education at Rutgers University who studies how undergraduate students understand proofs in mathematics: After you read this article, complete the following essay.   This will be an essay of length at least 500 words, which is equivalent to at least 2 typed pages with 1 inch margins, 12 point Times New Roman font, double spaced. (You can write a longer essay if needed.)    Your essay should respond to the following three questions.   The article describes four expectations that professors have for students, but which are usually mis-communicated. For each of these four expectations , do you respond more like the students in their surveys, or more like the professors? Why?    The discussion at the end of the article has some recommendations for faculty in their courses. Which of these recommendations do you think you would find most helpful for your learning, and why?    What is one thing you might change about your approach to your math courses after reading this article? Why is this the thing you would choose to change?      Your grade is based on completion only (in other words, if you complete the assignment and it meets the length requirement and responds appropriately to the prompt, then you get full credit).    P18      P19      P20      P21      P22      P23      Essay 4  Read the following article from 3 March 2025 in Quanta magazine: Years After the Early Death of a Math Genius, Her Ideas Gain New Life . After you read this article, complete the following essay.     This will be an essay of length at least 500 words, which is equivalent to at least 2 typed pages with 1 inch margins, 12 point Times New Roman font, double spaced. (You can write a longer essay if needed.)    Your essay should respond to the following three questions.   What aspect of this article made the strongest impression on you? In other words, what did you notice that you were most surprised\/inspired\/motivated\/etc by?    What were two aspects of the process of mathematical discovery that stood out to you about the story conveyed in the article?    What aspects of embodied, symbolic, and formal mathematics did you notice in this article?          P24      P25      P26      Essay 5  Read the course syllabus on the Canvas homepage for MA 261. After you read the syllabus, complete the following essay.   This will be an essay of length at least 500 words, which is equivalent to at least 2 typed pages with 1 inch margins, 12 point Times New Roman font, double spaced. (You can write a longer essay if needed.)    Your essay should respond to the following two questions.   So far we have investigated multiple topics and techniques in number theory. Which of these have you enjoyed the most? Which have you enjoyed the least? Why? Give specific examples from the homework and\/or notes to illustrate your opinions.    The student learning outcomes list various mathematical practices that students will develop in MA 261, in addition to the content-based learning outcomes. Which of these practices do you feel you have improved on the most so far this semester? Which do you are most in need of further development?      Your grade is based on completion only (in other words, if you complete the assignment and it meets the length requirement and responds appropriately to the prompt, then you get full credit).    P27      P28      P29      P30      P31      P32      Essay 6  Watch the following YouTube video from Quanta Magazine (17 minutes, published January 2021): After you watch this video, complete the following essay.   This will be an essay of length 500 words, which is equivalent to 2 typed pages with 1 inch margins, 12 point Times New Roman font, double spaced.    Write a critical review of this video. Imagine that you are writing your review for a journal for undergraduates in mathematics and the sciences, so your primary audience is undergraduate math\/cs\/engineering\/etc majors and minors.    Like any critic, you will respond positively to some things and negatively to others. Unlike many critics, you need to justify your opinions and provide detailed explanations for your claims.    You should consider the following questions:    Does the video effectively communicate the mathematics it discusses? Why or why not? Justify your claims with specific details about the video.    We have discussed multiple approaches\/themes to prime numbers in this course. Which of these approaches\/themes to prime numbers are used in this video? Be detailed, give specific examples from the video!    Is the mathematics clearly explained? If yes, what did they do especially well? If no, what made it unclear? Again, justify your claims with specific examples from the video.   Your grade is based on completion only (in other words, if you complete the assignment and it meets the length requirement and responds appropriately to the prompt, then you get full credit).    P33      P34      P35      P36      P37      P38      P39      P40      End-of-Class Reflection  Type a 1000 word essay in response to the following prompt. This is the equivalent of 4 pages in 12 point Times New Roman font, double-spaced.   What were six of the most important discoveries or realizations you made in this class? In other words, what are you taking away from this class that you think might stick with you over time and\/or influence you in the future? What have you experienced that might have a long-term effect on you intellectually or personally? These can include things you had not realized about mathematics or society, specific homework problems or theorems, etc. These can be things that made sense to you, or topics where you were confused, points that you agreed\/disagreed with in the readings or class discussions, issues that arose while working on your assignments, etc.    Explain why these six discoveries or realizations are important to you.    You should include a combination of observations about both mathematics and your habits, practices, and beliefs about mathematics.   This assignment grade is based only on completion (i.e. if you turn it in, it meets the length requirement, and it appropriately responds to the prompt above, then you get full credit).   "
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
  "body": " P1  For a real number , define the floor function  to be the greatest integer less than or equal to . For example, , , and . The SageMath command to compute the floor is \"floor(x)\".  Let and be positive integers. The goal of this problem is to explore why the number of multiples of between and (inclusive) is given by .   Draw a picture using the number line that demonstrates why this is true for and . Explain in words why your picture shows that this is true.    Draw a more generic picture using the number line that demonstrates why this is true for any and . Explain in words why your picture shows that this is true.    Explain why this is true using only symbols and words.     "
},
{
  "id": "problems-4",
  "level": "2",
  "url": "problems.html#problems-4",
  "type": "Problem",
  "number": "8.0.3",
  "title": "P2.",
  "body": " P2  In this problem, you will complete several computational exercises using SageMath. Before starting this problem, you should read . These exercises will require you to modify the code found in that section.  To submit your solutions, upload to Canvas either (A) a document with screenshots of your code and output, or (B) a link to a Jupyter notebook with your work.   Produce a list of all the numbers from 1 to 200 that are divisible by 10.    Produce a plot of the points for all between 1 and 400 that are divisible by 3 but not divisible by 5 or 7.    How many numbers between and are divisible by 23 but not divisible by 17 or 29?     "
},
{
  "id": "problems-5",
  "level": "2",
  "url": "problems.html#problems-5",
  "type": "Problem",
  "number": "8.0.4",
  "title": "P3.",
  "body": " P3  Consider the equation    Draw a picture that demonstrates why this is true for all positive integers . Explain how your picture is related to the equation. (This is an \"embodied\" proof.)    Give a \"symbolic\" proof of this equation by rewriting the numbers in the sum and using properties of sums that we have discussed in class. Hint: write each odd number as .    Hint: Begin both of these with small examples. What happens when ? How can you use these examples to guide your thinking about the general case?   "
},
{
  "id": "problems-6",
  "level": "2",
  "url": "problems.html#problems-6",
  "type": "Problem",
  "number": "8.0.5",
  "title": "P4.",
  "body": " P4  Use induction to prove that is true for all .  "
},
{
  "id": "problems-7",
  "level": "2",
  "url": "problems.html#problems-7",
  "type": "Problem",
  "number": "8.0.6",
  "title": "P5.",
  "body": " P5  Recall that .   Do a computational experiment comparing the values of and for . The command in SageMath for is \"factorial(n)\", while the command for is \"2^n\". Provide either a screenshot or printout or notebook link for your code and results.    State a precise conjecture in response to the following question: is one of these functions eventually larger than the other?    Use induction to prove your conjecture.     "
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
  "body": " P6  The Sylvester sequence is the sequence of positive integers defined by and for all .   Prove by induction on that for all , we have .    Prove that if is a prime number that divides for some , then does not divide for any . Explain why this implies that there are infinitely many prime numbers.    Explain in a few sentences how the Sylvester sequence is related to Euclid's proof of the infinitude of primes.     "
},
{
  "id": "problems-10",
  "level": "2",
  "url": "problems.html#problems-10",
  "type": "Problem",
  "number": "8.0.9",
  "title": "P7.",
  "body": " P7  We will show in this problem how the fundamental theorem of arithmetic can be used to prove that there are infinitely many primes. Recall that is the number of primes less than or equal to . This problem will lead you through the steps of a proof due to Paul Erdős.   Prove that every integer can be expressed as , where and are positive integers and is square-free (meaning that no prime number divides more than once).    Prove that there are at most square-free integers less than or equal to .    Prove that there are at most integers less than or equal to that are of the form for some positive integer .    Use the previous parts to prove that for all positive integers .    Show that the inequality in the previous part implies that for all .    Explain why this proves that there are infinitely many prime numbers.     "
},
{
  "id": "problems-11",
  "level": "2",
  "url": "problems.html#problems-11",
  "type": "Problem",
  "number": "8.0.10",
  "title": "P8.",
  "body": " P8  The following problem is an open problem in mathematics, meaning that it is a problem that has not been solved by anyone. The Euclid-Mullin sequence is the sequence of prime numbers that starts with and continues by taking the smallest prime number produced by a Euclid step, as defined in . Thus, the Euclid-Mullin sequence starts with If you are interested, you can read about this sequence at .  The open problem is: Does every prime number appear in the Euclid-Mullin sequence? For example, no one knows whether or not the prime is produced by this process.  Make as much progress as you can on this open problem; I don't expect you to find a solution, but you should spend 2-3 hours thinking about this! Your goal is to do something more than check examples; the examples should lead you to make some interesting observations about the problem, to understand it a bit better. Why do you think it might be true? Why might it be false? Are there any properties of binomial coefficients that support your comments? Are there any positive integers for which this is obviously true? You can do this using only pencil and paper, or using mostly computational experiments, or you can use a mix of these. However, you need to provide a narrative in sentences\/paragraphs explaining your thinking and the results of your investigations. (Seriously, write down everything you're thinking and every idea you try, even if it doesn't go anywhere.)  "
},
{
  "id": "problems-12",
  "level": "2",
  "url": "problems.html#problems-12",
  "type": "Problem",
  "number": "8.0.11",
  "title": "P9.",
  "body": " P9  We say a divisor of a positive integer is a positive integer such that . The sum of divisors function is defined to be the sum of all the divisors of . For example, the divisors of are , so .   Suppose for some prime number and some positive integer . Prove that . Then, use this to prove that .    Suppose is the prime factorization of . Prove that     Use the previous two parts to find the values of and .     "
},
{
  "id": "problems-13",
  "level": "2",
  "url": "problems.html#problems-13",
  "type": "Problem",
  "number": "8.0.12",
  "title": "P10.",
  "body": " P10  Let be a positive integer. Consider the sequence of numbers given by Prove that this sequence does not contain any prime number. Explain why this shows that there are arbitrarily long sequences of consecutive composite numbers.  "
},
{
  "id": "problems-14",
  "level": "2",
  "url": "problems.html#problems-14",
  "type": "Problem",
  "number": "8.0.13",
  "title": "P11.",
  "body": " P11     Prove that the polynomial is divisible by for all positive integers and .    Use the first part to prove that if is a composite number, then is also a composite number.     "
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
  "body": " Essay 4  Read the following article from 3 March 2025 in Quanta magazine: Years After the Early Death of a Math Genius, Her Ideas Gain New Life . After you read this article, complete the following essay.     This will be an essay of length at least 500 words, which is equivalent to at least 2 typed pages with 1 inch margins, 12 point Times New Roman font, double spaced. (You can write a longer essay if needed.)    Your essay should respond to the following three questions.   What aspect of this article made the strongest impression on you? In other words, what did you notice that you were most surprised\/inspired\/motivated\/etc by?    What were two aspects of the process of mathematical discovery that stood out to you about the story conveyed in the article?    What aspects of embodied, symbolic, and formal mathematics did you notice in this article?        "
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
  "body": " Essay 5  Read the course syllabus on the Canvas homepage for MA 261. After you read the syllabus, complete the following essay.   This will be an essay of length at least 500 words, which is equivalent to at least 2 typed pages with 1 inch margins, 12 point Times New Roman font, double spaced. (You can write a longer essay if needed.)    Your essay should respond to the following two questions.   So far we have investigated multiple topics and techniques in number theory. Which of these have you enjoyed the most? Which have you enjoyed the least? Why? Give specific examples from the homework and\/or notes to illustrate your opinions.    The student learning outcomes list various mathematical practices that students will develop in MA 261, in addition to the content-based learning outcomes. Which of these practices do you feel you have improved on the most so far this semester? Which do you are most in need of further development?      Your grade is based on completion only (in other words, if you complete the assignment and it meets the length requirement and responds appropriately to the prompt, then you get full credit).  "
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
  "body": " Essay 6  Watch the following YouTube video from Quanta Magazine (17 minutes, published January 2021): After you watch this video, complete the following essay.   This will be an essay of length 500 words, which is equivalent to 2 typed pages with 1 inch margins, 12 point Times New Roman font, double spaced.    Write a critical review of this video. Imagine that you are writing your review for a journal for undergraduates in mathematics and the sciences, so your primary audience is undergraduate math\/cs\/engineering\/etc majors and minors.    Like any critic, you will respond positively to some things and negatively to others. Unlike many critics, you need to justify your opinions and provide detailed explanations for your claims.    You should consider the following questions:    Does the video effectively communicate the mathematics it discusses? Why or why not? Justify your claims with specific details about the video.    We have discussed multiple approaches\/themes to prime numbers in this course. Which of these approaches\/themes to prime numbers are used in this video? Be detailed, give specific examples from the video!    Is the mathematics clearly explained? If yes, what did they do especially well? If no, what made it unclear? Again, justify your claims with specific examples from the video.   Your grade is based on completion only (in other words, if you complete the assignment and it meets the length requirement and responds appropriately to the prompt, then you get full credit).  "
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
