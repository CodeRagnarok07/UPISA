import React, { useRef } from 'react'

export default function LangSelect() {

  const debug = process.env.NEXT_PUBLIC_DEV

  const lang_name_local = debug ? "español" : `{{ lang.name_local }}`
  const lang_code = debug ? "es" : `{{ lang.code }}`

  const langScript = {
    set_language: "{% url 'set_language' %}",
    csrf_token: "{% csrf_token %}",
    opFor: `{% get_available_languages as LANGUAGES %}
    {% get_language_info_list for LANGUAGES as languages %}
    {% for language in languages %}`,
    for_item1: lang_name_local,
    for_item2: lang_code,
    endFor: "{% endfor %}"

  }

  const formRef = useRef()

  const handleClick = () => {
    formRef.current.classList.toggle("hidden")
  }

  return (

    <div className="lang" href="">

      <div onClick={() => handleClick()}>
        <p class="name">{lang_name_local} </p>
        <p class="code">{lang_code}</p>
      </div>


      <form class="lang_List hidden" ref={formRef} onchange={e => e.target.submit()} action={langScript.set_language} method="post">

        <input name="next" type="hidden" value="{{ redirect_to }}" />

        {langScript.csrf_token}
        {langScript.opFor}

        <label class="" for={langScript.for_item2}>
          <p class="name"> {langScript.for_item1} </p>
          <p class="code">({langScript.for_item2})</p>
          <input class="hidden" type="submit" name="language" value={langScript.for_item2} id={langScript.for_item2} />

          {langScript.for_item2 == lang_code &&
            <div className='lang_current'>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.2938 4.98125C10.3621 5.05256 10.4156 5.13666 10.4513 5.22871C10.4871 5.32077 10.5043 5.41897 10.5019 5.51769C10.4996 5.61641 10.4778 5.7137 10.4378 5.80397C10.3978 5.89425 10.3403 5.97573 10.2688 6.04375L6.6 9.54375C6.46007 9.67669 6.27427 9.75056 6.08125 9.75C5.8886 9.74868 5.70347 9.67507 5.5625 9.54375L3.73125 7.79375C3.58704 7.65617 3.50339 7.46693 3.4987 7.26768C3.49401 7.06842 3.56867 6.87546 3.70625 6.73125C3.84383 6.58704 4.03307 6.50339 4.23233 6.4987C4.43158 6.49401 4.62454 6.56867 4.76875 6.70625L6.08125 7.9625L9.23125 4.95625C9.30256 4.88794 9.38666 4.83439 9.47871 4.79867C9.57077 4.76294 9.66898 4.74575 9.7677 4.74807C9.86641 4.75039 9.9637 4.77219 10.054 4.8122C10.1443 4.85222 10.2257 4.90967 10.2938 4.98125ZM13.75 7C13.75 8.33502 13.3541 9.64007 12.6124 10.7501C11.8707 11.8601 10.8165 12.7253 9.58312 13.2362C8.34971 13.7471 6.99252 13.8808 5.68314 13.6203C4.37377 13.3598 3.17104 12.717 2.22703 11.773C1.28303 10.829 0.640153 9.62623 0.379702 8.31686C0.119252 7.00749 0.252925 5.65029 0.763816 4.41689C1.27471 3.18349 2.13987 2.12928 3.2499 1.38758C4.35994 0.645881 5.66498 0.25 7 0.25C8.78971 0.251655 10.5056 0.963345 11.7711 2.22886C13.0367 3.49437 13.7483 5.2103 13.75 7ZM12.25 7C12.25 5.96165 11.9421 4.94661 11.3652 4.08326C10.7883 3.2199 9.9684 2.54699 9.00909 2.14963C8.04978 1.75227 6.99418 1.6483 5.97578 1.85088C4.95738 2.05345 4.02192 2.55346 3.28769 3.28769C2.55347 4.02191 2.05345 4.95738 1.85088 5.97578C1.64831 6.99418 1.75228 8.04978 2.14964 9.00909C2.547 9.9684 3.2199 10.7883 4.08326 11.3652C4.94662 11.9421 5.96165 12.25 7 12.25C8.39188 12.2483 9.72628 11.6947 10.7105 10.7105C11.6947 9.72628 12.2483 8.39188 12.25 7Z" fill="#0B9839" />
              </svg>
            </div>
          }
        </label>
        {langScript.endFor}

      </form>




    </div>

  )
}
