import { images } from "../constant";
const articles = [
  {
    name: "learn-react",
    title: "The Fastest Way to Learn React",
    thumbnail: images.react,
    content: [
      `ReactJS is a declarative, efficient, and flexible JavaScript library for building reusable UI components. It is an open-source, component-based front end library responsible only for the view layer of the application. It was created by Jordan Walke, who was a software engineer at Facebook. It was initially developed and maintained by Facebook and was later used in its products like WhatsApp & Instagram. Facebook developed ReactJS in 2011 in its newsfeed section, but it was released to the public in the month of May 2013.

      Today, most of the websites are built using MVC (model view controller) architecture. In MVC architecture, React is the 'V' which stands for view, whereas the architecture is provided by the Redux or Flux.
      
      A ReactJS application is made up of multiple components, each component responsible for outputting a small, reusable piece of HTML code. The components are the heart of all React applications. These Components can be nested with other components to allow complex applications to be built of simple building blocks. ReactJS uses virtual DOM based mechanism to fill data in HTML DOM. The virtual DOM works fast as it only changes individual DOM elements instead of reloading complete DOM every time.
      
      To create React app, we write React components that correspond to various elements. We organize these components inside higher level components which define the application structure. For example, we take a form that consists of many elements like input fields, labels, or buttons. We can write each element of the form as React components, and then we combine it into a higher-level component, i.e., the form component itself. The form components would specify the structure of the form along with elements inside of it.
      ADVERTISEMENT
      
      ADVERTISEMENT
      
      
      Why learn ReactJS?
      Today, many JavaScript frameworks are available in the market(like angular, node), but still, React came into the market and gained popularity amongst them. The previous frameworks follow the traditional data flow structure, which uses the DOM (Document Object Model). DOM is an object which is created by the browser each time a web page is loaded. It dynamically adds or removes the data at the back end and when any modifications were done, then each time a new DOM is created for the same page. This repeated creation of DOM makes unnecessary memory wastage and reduces the performance of the application.
      
      Therefore, a new technology ReactJS framework invented which remove this drawback. ReactJS allows you to divide your entire application into various components. ReactJS still used the same traditional data flow, but it is not directly operating on the browser's Document Object Model (DOM) immediately; instead, it operates on a virtual DOM. It means rather than manipulating the document in a browser after changes to our data, it resolves changes on a DOM built and run entirely in memory. After the virtual DOM has been updated, React determines what changes made to the actual browser's DOM. The React Virtual DOM exists entirely in memory and is a representation of the web browser's DOM. Due to this, when we write a React component, we did not write directly to the DOM; instead, we are writing virtual components that react will turn into the DOM.`,
    ],
  },
  {
    name: "learn-node",
    title: "How to Build a Node Server in 10 Minutes",
    thumbnail: images.node,
    content: [
      `In this article, we're going to be talking looking at a very quick way to set up a Node.js server. We'll be discussing some topics such as proin congue ligula id risus posuere, vel eleifend ex egestas. Sed in turpis leo. Aliquam malesuada in massa tincidunt egestas. Nam consectetur varius turpis, non porta arcu porttitor non. In tincidunt vulputate nulla quis egestas. Ut eleifend ut ipsum non fringilla. Praesent imperdiet nulla nec est luctus, at sodales purus euismod.`,
      `Donec vel mauris lectus. Etiam nec lectus urna. Sed sodales ultrices dapibus. Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id consequat quam. Vivamus accumsan dui in facilisis aliquet.`,
      `Etiam nec lectus urna. Sed sodales ultrices dapibus. Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id consequat quam. Vivamus accumsan dui in facilisis aliquet.`,
    ],
  },
  {
    name: "my-thoughts-on-learning-react",
    title: "My Thoughts on Learning ReactJS",
    thumbnail: images.react2,
    content: [
      `Today is the day I talk about something which scares most people: Learning ReactJS. In reality, I'm not sure why people have such a hard time with Learning ReactJS ligula id risus posuere, vel eleifend ex egestas. Sed in turpis leo. Aliquam malesuada in massa tincidunt egestas. Nam consectetur varius turpis, non porta arcu porttitor non. In tincidunt vulputate nulla quis egestas. Ut eleifend ut ipsum non fringilla. Praesent imperdiet nulla nec est luctus, at sodales purus euismod.`,
      `Donec vel mauris lectus. Etiam nec lectus urna. Sed sodales ultrices dapibus. Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id consequat quam. Vivamus accumsan dui in facilisis aliquet.`,
      `Etiam nec lectus urna. Sed sodales ultrices dapibus. Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id consequat quam. Vivamus accumsan dui in facilisis aliquet.`,
    ],
  },
  {
    name: "best-way-to-improve-coding",
    title: "Best way to improve coding",
    thumbnail: images.improve,
    content: [
      `Today is the day I talk about something which scares most people: Learning ReactJS. In reality, I'm not sure why people have such a hard time with Learning ReactJS ligula id risus posuere, vel eleifend ex egestas. Sed in turpis leo. Aliquam malesuada in massa tincidunt egestas. Nam consectetur varius turpis, non porta arcu porttitor non. In tincidunt vulputate nulla quis egestas. Ut eleifend ut ipsum non fringilla. Praesent imperdiet nulla nec est luctus, at sodales purus euismod.`,
      `Donec vel mauris lectus. Etiam nec lectus urna. Sed sodales ultrices dapibus. Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id consequat quam. Vivamus accumsan dui in facilisis aliquet.`,
      `Etiam nec lectus urna. Sed sodales ultrices dapibus. Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id consequat quam. Vivamus accumsan dui in facilisis aliquet.`,
    ],
  },
  {
    name: "top-10-coding-languages",
    title: "Top 10 coding languages to learn in 2023",
    thumbnail: images.languages,
    content: [
      `Today is the day I talk about something which scares most people: Learning ReactJS. In reality, I'm not sure why people have such a hard time with Learning ReactJS ligula id risus posuere, vel eleifend ex egestas. Sed in turpis leo. Aliquam malesuada in massa tincidunt egestas. Nam consectetur varius turpis, non porta arcu porttitor non. In tincidunt vulputate nulla quis egestas. Ut eleifend ut ipsum non fringilla. Praesent imperdiet nulla nec est luctus, at sodales purus euismod.`,
      `Donec vel mauris lectus. Etiam nec lectus urna. Sed sodales ultrices dapibus. Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id consequat quam. Vivamus accumsan dui in facilisis aliquet.`,
      `Etiam nec lectus urna. Sed sodales ultrices dapibus. Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id consequat quam. Vivamus accumsan dui in facilisis aliquet.`,
      `Etiam nec lectus urna. Sed sodales ultrices dapibus. Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id consequat quam. Vivamus accumsan dui in facilisis aliquet.`,
    ],
  },
];
export default articles;
