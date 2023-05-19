import React from 'react'
import Image from '../Images/Image1.jpg'
import { motion } from 'framer-motion'
const Page = () => {
  return (
  <>
    <motion.div
       initial={{width:0}}
       animate={{width:'100%'}}
       exit={{x:window.innerWidth,transition:{duration:
       0.1}}}
    className='Page'>
        <div className='Page-img'>
        <img src={Image}alt="image1" />
            </div>
        <div className='Page-context'>
        <h2>" Good nutrition is essential for maintaining a healthy and balanced lifestyle. Whether you're aiming to lose weight, improve athletic performance, or simply want to feel your best, understanding the principles of nutrition is key.
        "</h2>
<p>At <strong>Nouriv,</strong> we believe in providing reliable and up-to-date information to help you make informed decisions about your diet. Our nutrition page covers a wide range of topics, from the basics of macronutrients and micronutrients to specific dietary approaches and their potential benefits.
</p>
<br />
Here are some key areas you can explore on our nutrition page:
<ul>
<li><strong>Macronutrients:</strong> Learn about the three main macronutrients – carbohydrates, proteins, and fats – and their roles in the body. Discover how to determine your optimal macronutrient intake based on your goals and lifestyle.
</li>
<li><strong>Micronutrients:</strong> Understand the importance of essential vitamins and minerals for overall health and well-being. Find out which foods are rich sources of these micronutrients and how to ensure you're meeting your daily requirements.
</li>
<li><strong>Balanced Diet:</strong> Discover the principles of a balanced diet and how to create meals that provide a variety of nutrients. Get tips on portion control, meal planning, and incorporating a wide range of colorful fruits and vegetables into your diet.
</li>
<li><strong>Special Dietary Needs:</strong> Explore information about special dietary needs, such as vegetarianism, veganism, gluten-free diets, and more. Learn how to meet your nutritional needs while following these specific dietary choices.
</li>
<li><strong>Weight Management:</strong> Get insights into effective strategies for weight management, including calorie control, mindful eating, and sustainable lifestyle changes. Find practical tips for maintaining a healthy weight and achieving long-term success.
</li>
<li><strong>Sports Nutrition:</strong> If you're an athlete or actively involved in sports, our page provides guidance on optimizing your nutrition for performance and recovery. Learn about pre and post-workout nutrition, hydration, and fueling strategies to enhance your athletic abilities.
</li>
<li><strong>Healthy Recipes:</strong> Browse our collection of delicious and nutritious recipes designed to inspire and support your healthy eating journey. From breakfast ideas to main courses and snacks, you'll find a wide range of options that cater to different tastes and dietary preferences.
</li>


</ul>

Remember, the information provided on our nutrition page is for educational purposes only and should not replace personalized advice from a healthcare professional or registered dietitian. Everyone's nutritional needs may vary, so it's important to consult with an expert for personalized guidance.
<br /><br />
We hope our nutrition page serves as a valuable resource to help you make informed choices and embark on a path of healthier living. Start exploring the articles, tips, and recipes, and take the first step towards a nourished and vibrant life!
<br /><br />
<strong >Disclaimer:</strong> Please note that the information provided on this nutrition page is not intended to diagnose, treat, or cure any medical condition. Always consult with a qualified healthcare professional before making any changes to your diet or lifestyle.
            </div>
    </motion.div>
  </>
  )
}

export default Page