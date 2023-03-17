const form = document.querySelector(".comments-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let isError = false;

  if (!form.name.value) {
    const warrningMessage = form.name.parentElement.querySelector(
      ".comments-form__warrning"
    );

    warrningMessage.classList.remove("hidden");
    isError = true;
  }

  if (!form.text.value) {
    const warrningMessage = form.text.parentElement.querySelector(
      ".comments-form__warrning"
    );

    warrningMessage.classList.remove("hidden");
    isError = true;
  }

  if (isError) {
    return;
  }

  addComment(form.name.value, form.text.value, form.date.value);
});

form.addEventListener("input", (e) => {
  const warrningMessage = e.target.parentElement.querySelector(
    ".comments-form__warrning"
  );

  warrningMessage?.classList.add("hidden");
});

document.querySelector(".comments").addEventListener("click", (e) => {
  if (e.target.closest(".comment__delete")) {
    e.target.closest(".comment").remove();
  }

  if (e.target.closest(".comment__like")) {
    e.target
      .closest(".comment__like")
      .classList.toggle("comment__like--active");
  }

  return;
});

function addComment(name, text, date) {
  date = createDate(date);

  const comments = document.querySelector(".comments");
  const comment = createElementHasClass("div", "comment");

  const nameSpan = createElementHasClass("span", "comment__name", name);
  const dateSpan = createElementHasClass("span", "comment__date", date);
  const textP = createElementHasClass("p", "comment__text", text);
  const deleteBtn = createElementHasClass(
    "button",
    "comment__delete",
    `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" width="729.837px" height="729.838px" viewBox="0 0 729.837 729.838" style="enable-background:new 0 0 729.837 729.838;" xml:space="preserve">
    <g>
      <g>
        <g>
          <path d="M589.193,222.04c0-6.296,5.106-11.404,11.402-11.404S612,215.767,612,222.04v437.476c0,19.314-7.936,36.896-20.67,49.653     c-12.733,12.734-30.339,20.669-49.653,20.669H188.162c-19.315,0-36.943-7.935-49.654-20.669     c-12.734-12.734-20.669-30.313-20.669-49.653V222.04c0-6.296,5.108-11.404,11.403-11.404c6.296,0,11.404,5.131,11.404,11.404     v437.476c0,13.02,5.37,24.922,13.97,33.521c8.6,8.601,20.503,13.993,33.522,13.993h353.517c13.019,0,24.896-5.394,33.498-13.993     c8.624-8.624,13.992-20.503,13.992-33.498V222.04H589.193z"/>
          <path d="M279.866,630.056c0,6.296-5.108,11.403-11.404,11.403s-11.404-5.107-11.404-11.403v-405.07     c0-6.296,5.108-11.404,11.404-11.404s11.404,5.108,11.404,11.404V630.056z"/>
          <path d="M376.323,630.056c0,6.296-5.107,11.403-11.403,11.403s-11.404-5.107-11.404-11.403v-405.07     c0-6.296,5.108-11.404,11.404-11.404s11.403,5.108,11.403,11.404V630.056z"/>
          <path d="M472.803,630.056c0,6.296-5.106,11.403-11.402,11.403c-6.297,0-11.404-5.107-11.404-11.403v-405.07     c0-6.296,5.107-11.404,11.404-11.404c6.296,0,11.402,5.108,11.402,11.404V630.056L472.803,630.056z"/>
          <path d="M273.214,70.323c0,6.296-5.108,11.404-11.404,11.404c-6.295,0-11.403-5.108-11.403-11.404     c0-19.363,7.911-36.943,20.646-49.677C283.787,7.911,301.368,0,320.73,0h88.379c19.339,0,36.92,7.935,49.652,20.669     c12.734,12.734,20.67,30.362,20.67,49.654c0,6.296-5.107,11.404-11.403,11.404s-11.403-5.108-11.403-11.404     c0-13.019-5.369-24.922-13.97-33.522c-8.602-8.601-20.503-13.994-33.522-13.994h-88.378c-13.043,0-24.922,5.369-33.546,13.97     C278.583,45.401,273.214,57.28,273.214,70.323z"/>
          <path d="M99.782,103.108h530.273c11.189,0,21.405,4.585,28.818,11.998l0.047,0.048c7.413,7.412,11.998,17.628,11.998,28.818     v29.46c0,6.295-5.108,11.403-11.404,11.403h-0.309H70.323c-6.296,0-11.404-5.108-11.404-11.403v-0.285v-29.175     c0-11.166,4.585-21.406,11.998-28.818l0.048-0.048C78.377,107.694,88.616,103.108,99.782,103.108L99.782,103.108z      M630.056,125.916H99.782c-4.965,0-9.503,2.02-12.734,5.274L87,131.238c-3.255,3.23-5.274,7.745-5.274,12.734v18.056h566.361     v-18.056c0-4.965-2.02-9.503-5.273-12.734l-0.049-0.048C639.536,127.936,635.021,125.916,630.056,125.916z"/>
        </g>
      </g>
    </g>
    </svg>`
  );
  const likeBtn = createElementHasClass(
    "button",
    "comment__like",
    `<svg
      width="22"
      height="20"
      viewBox="0 0 22 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
  <path
    d="M20.1756 1.86141C18.9981 0.669166 
    17.4296 0.0094249 15.7635 0.0094249C14.0973
    0.0094249 12.5242 0.669166 11.3467 1.86612L11.007
    2.21013L10.6579 1.8567C9.47577 0.659741 7.90733 0
    6.23651 0C4.57034 0 3.00655 0.655029 1.82906 1.85199C0.646921
    3.04894 0 4.63703 0 6.32409C0 8.01114 0.651575 9.59923 1.83372
    10.7915L10.3368 19.4011C10.5136 19.5802 10.7556 19.6838 11.0116
    19.6838C11.2629 19.6838 11.505 19.5802 11.6865 19.4011L20.1663 
    10.8056C21.3484 9.60865 21.9953 8.02056 22 6.33351C22.0046 4.64646
    21.3531 3.05837 20.1756 1.86141Z"
    fill="#DADADA"
  />
</svg>`
  );

  comment.append(nameSpan, dateSpan, textP, deleteBtn, likeBtn);

  comments.append(comment);
}

function createElementHasClass(tag, className, html) {
  const elem = document.createElement(tag);
  elem.classList.add(className);

  if (html) {
    elem.innerHTML = html;
  }

  return elem;
}

function createDate(date) {
  const dateNow = new Date(Date.now());

  if (!date) {
    date = "сегодня ";
  } else {
    if (dateNow.getDate() - date.split("-")[2] === 0) {
      date = "сегодня ";
    }

    if (dateNow.getDate() - date.split("-")[2] === 1) {
      date = "вчера ";
    }
  }

  const hours =
    dateNow.getHours() < 10
      ? "0" + String(dateNow.getHours())
      : dateNow.getHours();

  const minutes =
    dateNow.getMinutes() < 10
      ? "0" + String(dateNow.getMinutes())
      : dateNow.getMinutes();

  const time = `${hours}:${minutes}`;
  return date + " " + time;
}
