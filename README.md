### Full Stack Ecommerce App built with React, Stripe and Sanity
### View it here: https://next-app-koala-market.vercel.app/

<img width="1434" alt="Screen Shot 2022-10-21 at 10 09 13 AM" src="https://user-images.githubusercontent.com/48096041/197091003-127bef7a-1f36-43e3-91bb-0e1200e9f597.png">
&nbsp;&nbsp;

This project started because I was interested in building an ecommerce site from the ground up. I wanted to know what the process would be like, and how I could handle real-world problems such as data persistance, payment processing, etc. I found a powerful solution in combining Sanity as a CMS and the Stripe payment system. The end result is a fully rendered and workable ecommerce application designed with the most modern web development practices in mind.

&nbsp;&nbsp;
How I used React:
- State management for the app is handled using the UseContext API from React
- Next JS is implemented using:
   - Server-side and static generation of data (getServerSideProps, getStaticProps, getStaticPaths)
   - Utilizing Next JS as a backend endpoint
   - Modern React functional components with hooks and refs
- Custom implementation of Stripe to handle the checkout process, shipping rates and products
- Content is all managed through Sanity, I set up my own studio with customizations for each item and then used the sanity JS client to query product details and display on the FE.
- The result is a hyper-scalable, modern ecommerce web application
 
 &nbsp;&nbsp;
<p align="center" width="100%">
<img width="800" alt="Screen Shot 2022-10-21 at 10 09 26 AM" src="https://user-images.githubusercontent.com/48096041/197091017-59270f58-1e3a-462e-bcc7-ab8faa8614fb.png">
</p>
&nbsp;&nbsp;
<p align="center" width="100%">
<img width="800" alt="Screen Shot 2022-10-21 at 10 10 25 AM" src="https://user-images.githubusercontent.com/48096041/197091036-588e9af6-aa69-4bc6-86cc-46bd521a0074.png">
</p>
&nbsp;&nbsp;
<p align="center" width="100%">
<img width="1000" alt="Screen Shot 2022-10-21 at 10 11 35 AM" src="https://user-images.githubusercontent.com/48096041/197091060-3640cd66-7c3f-447c-86d1-301f5a4985d3.png">
</p>
&nbsp;&nbsp;
<p align="center" width="100%">
<img width="800" alt="Screen Shot 2022-10-21 at 10 12 09 AM" src="https://user-images.githubusercontent.com/48096041/197091088-ada5344f-e2f8-4113-b51f-14ae818feb50.png">
</p>
&nbsp;&nbsp;
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
