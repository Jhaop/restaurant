import './style.css';

export default function Home(){
    const myHome = document.createElement('div');
    myHome.classList.add('home');

    const title1 = document.createElement('h2');
    const title2 = document.createElement('h2');
    const title3 = document.createElement('h3');

    const text1 = document.createElement('p');
    const text2 = document.createElement('p');
    const text3 = document.createElement('p');

    title1.classList.add('title');
    title2.classList.add('title');
    title3.classList.add('title');

    text1.classList.add('text');
    text2.classList.add('text');
    text3.classList.add('text');

    title1.innerHTML = 'Ante metus dictum';
    title2.innerHTML = 'Augue neque gravida in fermentum et sollicitudin';
    title3.innerHTML = 'Nisl vel';

    text1.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Feugiat nisl pretium fusce id velit. Non nisi est sit amet facilisis magna etiam tempor.';
    text2.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu ac tortor dignissim convallis aenean et tortor at risus. Pellentesque nec nam aliquam sem et tortor.';
    text3.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae tempus quam pellentesque nec nam aliquam sem et. Maecenas accumsan lacus vel facilisis volutpat est velit egestas dui. Tincidunt tortor aliquam nulla facilisi cras fermentum odio eu feugiat.';

    myHome.appendChild(title1);
    myHome.appendChild(text1);
    myHome.appendChild(title2);
    myHome.appendChild(text2);
    myHome.appendChild(title3);
    myHome.appendChild(text3);
    return myHome;
}