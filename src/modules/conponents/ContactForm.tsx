"use client"

// import { useState } from "react"
import { FieldValues, useForm } from "react-hook-form"
import ErrorMessage from "./ErrorMessage"

const ContactForm = () => {
  const methods = useForm()
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = methods

  const submitHandler = async (data: FieldValues) => {
    console.log(data)
    // PHPスクリプトへのリクエスト
    const response = await fetch("https://exsend.com/mailer.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        ...data,
      }).toString(),
    })

    console.log(response)
  }

  return (
    <>
      <form onSubmit={handleSubmit((data) => submitHandler(data))}>
        <div className="auto">
          <div className="mx-auto items-center w-4/5 min-w-48">
            <div className="min-h-20 text text-red-400">
              <p>お問い合わせフォームをご利用の方は下記のフォームをご利用ください。</p>
              <p>内容を確認後、担当者よりご連絡いたします。</p>
            </div>
            <div className="lg:flex">
              <div className="w-40">
                <label>企業名</label>
              </div>
              <div>
                <input type="text" {...register("company")} placeholder="ここに入力"></input>
              </div>
            </div>
            <div className="lg:flex">
              <div className="w-40">
                <label>氏名</label>
              </div>
              <div>
                <input
                  className="w-48"
                  type="text"
                  {...register("name", { required: true })}
                  placeholder="ここに入力"
                ></input>
                {errors.name && <ErrorMessage message="氏名を入力してください" />}
              </div>
            </div>
            <div className="lg:flex">
              <div className="w-40">
                <label>電話番号</label>
              </div>
              <div>
                <input type="text" {...register("tele", { required: true })} placeholder="ここに入力"></input>
                {errors.tele && <ErrorMessage message="電話番号を入力してください" />}
              </div>
            </div>
            <div className="lg:flex">
              <div className="w-40">
                <label>メールアドレス</label>
              </div>
              <div>
                <input type="text" {...register("mail", { required: true })} placeholder="メールアドレス"></input>
                {errors.mail && <ErrorMessage message="メールアドレスを入力してください" />}
              </div>
            </div>
            <div className="lg:flex">
              <div className="w-40">
                <label>お問い合わせ内容</label>
              </div>
              <div className="">
                <select>
                  <option value="YouTube運用">YouTube運用</option>
                  <option value="動画制作/撮影">動画制作/撮影</option>
                  <option value="SNS運用代行">SNS運用代行</option>
                  <option value="SNS広告制作">SNS広告制作</option>
                  <option value="HP制作">HP制作</option>
                  <option value="美容医療SNS支援サービス「メディカルライアート」">
                    美容医療SNS支援サービス「メディカルライアート」
                  </option>
                  <option value="MEO対策">MEO対策</option>
                </select>
              </div>
            </div>
            <div className="lg:flex">
              <div className="w-40">
                <label>備考</label>
              </div>
              <div className="w-2/3">
                <input type="text" {...register("note", { required: true })} placeholder="ここに入力"></input>
              </div>
            </div>
            <button
              className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
              type="submit"
            >
              送信
            </button>
          </div>
        </div>
      </form>
    </>
  )
}

export default ContactForm
