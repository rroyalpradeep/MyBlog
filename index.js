const express = require("express");
let app = express();
const path = require("path");
const nodemailer = require("nodemailer");

let port = 8080;
var methodOverride = require('method-override');
app.use(methodOverride('_method'));

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "yuvi4650@gmail.com",
        pass: "hsgl fkxv dbkh jhsv",
    },
});

let posts = [
    {
        title:"Evaluation in Artificial Intelligence",
        author:"Vikas",
        Description:"Artificial intelligence develops techniques and systems whose performance must be evaluated on a regular basis in order to certify and foster progress in the discipline.The evaluation of artificial intelligence systems and components is crucial for the progress of the discipline. In this paper we describe and critically assess the different ways AI systems are evaluated, and the role of components and techniques in these systems. We first focus on the traditional task-oriented evaluation approach. We identify three kinds of evaluation: human discrimination, problem benchmarks and peer confrontation. We describe some of the limitations of the many evaluation schemes and competitions in these three categories, and follow the progression of some of these tests. We then focus on a less customary (and challenging) ability-oriented evaluation approach, where a system is characterised by its (cognitive) abilities, rather than by the tasks it is designed to solve. We discuss several possibilities: the adaptation of cognitive tests used for humans and animals, the development of tests derived from algorithmic information theory or more integrated approaches under the perspective of universal psychometrics. We analyse some evaluation tests from AI that are better positioned for an ability-oriented evaluation and discuss how their problems and limitations can possibly be addressed with some of the tools and ideas that appear within the paper. Finally, we enumerate a series of lessons learnt and generic guidelines to be used when an AI evaluation scheme is under consideration."
    },

    {
        title:"Future of Software Development",
        author:"Ravindra",
        Description:"The future of software development is shaped by innovation and technological advancements1. Here are some trends defining the future of software creation and deployment.Development teams have eagerly embraced AI, particularly GenAI, to accelerate coding and drive efficiency. While the push for the '10x developer' is transforming software creation, the need for speed can sideline or shortcut traditional practices like code reviews, raising significant security concerns. In the coming year, overconfidence in AI's capabilities could lead to vulnerable or malicious code slipping into production. GenAI is powerful but fallible — it can be tricked with prompts and is prone to hallucinations. This risk is not hypothetical: 78% of security leaders believe AI-generated code will lead to a major security reckoning. The CrowdStrike outage illustrated how quickly unvetted code can escalate into a crisis. With AI-generated code on the rise, organizations must authenticate all code, applications, and workloads by verifying their identity. Code signing will become an even greater cornerstone in 2025, ensuring code comes from trusted sources, remains unchanged, and is approved for use. Yet, challenges persist: 83% of security leaders report developers already use AI to generate code, and 57% say it's now common practice. Despite this, 72% feel pressured to allow AI to stay competitive, while 63% have considered banning it due to security risks. Balancing innovation with security will be critical moving forward. — Kevin Bocek, chief innovation officer, Venafi, a CyberArk company."
    },

    {
        title:"Escalation of The Edge Computing",
        author:"kaushal",
        Description:"The Internet of Things (IoT) is now infiltrating into our daily lives, providing important measurement and collection tools to inform us of every decision.With the rapid expansion of the Internet of Everything (IoE), the number of smart devices connected to the internet increases, resulting in large-scale data, which has created challenges in traditional cloud computing models such as bandwidth load and slow response speed, poor security, and poor privacy. Because traditional cloud computing is no longer enough to satisfy today’s intelligent society’s wide variety of data processing requirements, edge computing solutions have developed. It is a novel computing paradigm for conducting computations at the network’s edge. It is lightweight at the network’s edge for local, small-scale data storage and processing. This article mostly discusses state-of-art coverage of edge computing topics and highlights the present challenges and future opportunities. It begins by summarizing the notion of edge computing and comparing it to cloud computing. Then, outline the edge computing architecture, keyword technology, security, and privacy protection, and lastly, summarize the edge computing applications."
    },
    
    {
        title:"Quantum Computing",
        author:"Akash",
        Description:"Quantum computing is an advanced field of computer science that leverages the principles of quantum mechanics to solve complex problems that are beyond the capabilities of computers Unlike classical computers. Edge Technology aims at making Internet Of Things (IOT) with 100 thousand of sensors in next decade, with the increased usage and manipulation of large data it becomes important to get used to this technology which refers to computing on sensor itself. 2019 is predicted as the year of edge technology and will remain so in the coming years. In a variety of situations, edge computing is deployed. One is when IOT devices is centrally connected to cloud due to poor connectivity of devices. By the year 2020, there will be approximately 1.5 GB worth of data is generated per day. With many devices connected to the internet and generating data, its not possible for cloud alone to handle this huge data all by itself. Edge can relate to the data processing as well as the local processing of real-time data. The various edge components that can be counted upon are Data processing, Rule Engine, Local Database. Cloud is more concerned with big data processing and data warehousing. \n 5 Key Benefits Of Edge Computing: \n Faster response time. \n Security and Compliance.  \n Cost-effective Solution. \n Reliable Operation With Intermittent Connectivity.\n Reduced latency"
    },

    {
        title:"The New Era of Innovation",
        author:"Diyush",
        Description:"The New Era of Innovation, introduces our philosophy for innovation with Generative AI (GenAI), which empowers insights functions to produce bolder innovations, with faster development cycles and smarter processes. Artificial intelligence has triggered a seismic shift in innovation development, enabling businesses to bring better products and services into our world. Our latest Ipsos Views POV, The New Era of Innovation, introduces our philosophy for innovation with Generative AI (GenAI), which empowers insights functions to produce bolder innovations, with faster development cycles and smarter processes.\n More specifically, we explore how GenAI: \n  Shatters traditional stage gates: \n The outdated innovation funnel, characterized by isolated teams and disjointed processes, has long hindered business growth. The rise of GenAI has enabled a new era that fosters collaboration and agility, with elevated systems and solutions igniting bolder innovations at an unprecedented pace. \n Builds breakthroughs from barriers: \n GenAI is disrupting the way businesses operate. By tearing through silos, it enables smarter, faster and bolder insights. Training large language models (LLMs) with fresh consumer data gives manufacturers a unique opportunity to overcome barriers in their innovation cycles and achieve superior results. "
    },

    {
        title:"Windows troubleshooters",
        author:"Yuvraj",
        Description:"Get Help has troubleshooters you can run for many common scenarios. These often help resolve issues without the need to contact support. If a troubleshooter is available for your issue, select Run to start that troubleshooter.Windows Update is turned on by default in Windows 10/11 and is responsible for delivering security and other important updates to your Windows 10/11 from Microsoft. The Windows Update in Windows 10 and 11 can also automatically download and update device drivers. \n When Windows Update is working without any issues, it automatically downloads and installs updates when updates are available.\n At times, the Windows Update might stop checking for updates or might fail to download available updates. If Windows Update is not working as it’s supposed to in Windows 10, you can use the built-in Windows Update Troubleshooter to find and resolve issues that stop Windows 10 from updating."
    },

    {
        title:"Top 25 New Technology Trends ",
        author:"Ronish",
        Description:"Let’s explore the advancements you need to know and how they’re already impacting the way we live and work. Here’s your roadmap to the most transformative technologies, the opportunities they bring. Technology today is evolving at a rapid pace, enabling faster change and progress, causing an acceleration of the rate of change. However, it is not only technology trends and emerging technologies that are evolving, a lot more has changed, making IT professionals realize that their role will not stay the same in the contactless world tomorrow. And an IT professional in 2025 will constantly be learning, unlearning, and relearning, out of necessity, if not desire! \n What does this mean for you? It means staying current with emerging technologies and the latest technology trends. It means keeping your eyes on the future to know which skills you’ll need to know to secure a safe job tomorrow and even learn how to get there. Here are the top 25 emerging technology trends you should watch in 2025. Starting the list of new technology trends with the talk of the town, gen-AI! Generative AI is set to dominate as a key technology trend in 2025, reshaping industries through its ability to create highly sophisticated and human-like content, from text and images to audio and complex simulations. Advancements in generative models, like GPTs and multimodal systems, are driving new applications in content creation, design automation, and interactive experiences. \n This technology is not only enhancing productivity but also revolutionizing how businesses approach problem-solving, customer engagement, and creative processes, making tools more accessible and versatile across various sectors. In 2025, organizations will continue integrating generative AI into workflows to innovate faster and provide personalized services at scale."
    },

    {
        title:"Corporate Social Responsibility",
        author:"Jimoni",
        Description:"Corporate social responsibility is a business model by which companies make a concerted effort to operate in ways that enhance rather than degrade society and the environment. Corporate social responsibility (CSR) is a self-regulating business model that helps a company be socially accountable to itself, its stakeholders, and the public. \n By practicing corporate social responsibility, also called corporate citizenship, companies are aware of how they impact aspects of society, including economic, social, and environmental. Engaging in CSR means a company operates in ways that enhance society and the environment instead of contributing negatively to them. According to a study published in the Journal of Consumer Psychology, consumers are more likely to act favorably toward a company that has acted to benefit its customers.\n As a company engages in CSR, it is more likely to receive favorable brand recognition. Additionally, workers are more likely to stay with a company they believe in. This reduces employee turnover, disgruntled workers, and the total cost of a new employee. \n For companies looking to outperform the market, enacting CSR strategies may improve how investors view the company's value. The Boston Consulting Group found that companies considered leaders in environmental, social, or governance matters had an 11% valuation premium over their competitors.\n Boston Consulting Group. 'Your Supply Chain Needs a Sustainability Strategy.' \n CSR practices help companies mitigate risk by avoiding troubling situations. This includes preventing adverse activities such as discrimination against employee groups, disregard for natural resources, unethical use of company funds, and activity that leads to lawsuits, and litigation."
    }
];

app.get(`/posts`, (req, res) => {
    res.render("Home" ,{posts});
});

app.get(`/admin`, (req, res)=>{
    res.render("Admin", {posts});
});

app.get(`/admin/new`, (req, res)=> {
    res.render("New");
});

app.get(`/posts/:id`, (req, res)=>{
    let {id} = req.params;
    res.render("post_id", {posts, id});
});

app.post("/admin/new", (req, res) => {
    const { title, Description, author } = req.body;
    if (!title || !Description) {
        return res.status(400).send("Title and Description are required.");
    }
    posts.push({ title, author, Description});
    res.redirect("http://localhost:8080/admin");
});

app.get(`/admin/:id/edit`, (req, res)=> {
    let {id} = req.params;
    res.render("update", {posts, id});
});

app.patch(`/admin/:id/edit`, (req, res)=> {
    let {id} = req.params;
    let {title, Description} = req.body;
    posts[id].title = title;
    posts[id].Description = Description;
    res.redirect(`http://localhost:8080/posts/${id}`);
});

app.delete(`/admin/:id/delete`, (req, res)=>{
    let {id} = req.params;
    posts.splice(id, 1);
    res.redirect("http://localhost:8080/admin");
});

app.get(`/Contact`, (req, res)=>{
    res.render("Contact");
});

app.post(`/Contact`, async (req, res)=>{
    let {name, email, message} = req.body;
    const mailOptions = {
        from: email,
        to: "yuvi4650@gmail.com",
        subject: "New Form Submission from MyBlog.",
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.send(` <p>Email sent successfully! Redirecting...</p> 
                <script>
                    setTimeout(() => { 
                    window.location.href = "/posts"; 
                     }, 3000);
                </script>
            `);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error sending email.");
    } 
});

app.get(`/About-us`, (req, res)=>{
    res.render(`About-us`);
});

app.get("*", (req, res) =>{
    res.render("error");
});

app.listen(port, ()=> {
    console.log(`Server is running at ${port} port`);
});