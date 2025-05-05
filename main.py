import speech_recognition as sr
import pyttsx3

# Инициализация голосового движка
engine = pyttsx3.init()
voices = engine.getProperty('voices')
engine.setProperty('voice', voices[95].id)

def speak(text):
    print("Бот:", text)
    engine.say(text)
    engine.runAndWait()

def listen():
    recognizer = sr.Recognizer()
    with sr.Microphone() as source:
        recognizer.pause_threshold = 1.2
        recognizer.energy_threshold = 300
        print("Слушаю клиента...")
        audio = recognizer.listen(source, timeout=None, phrase_time_limit=12)

    try:
        text = recognizer.recognize_google(audio, language="ru-RU")
        print("Клиент:", text)
        return text.lower()
    except sr.UnknownValueError:
        speak("Извините, я не расслышал. Повторите, пожалуйста.")
        return ""
    except sr.RequestError:
        speak("Ошибка соединения с сервисом распознавания.")
        return ""

# Ключевые фразы
greetings = ["привет", "здравствуй", "здравствуйте", "добрый день", "доброе утро", "добрый вечер", "хай"]
services = ["услуги", "что вы делаете", "чем занимаетесь", "какие услуги", "чем вы можете помочь", "чем вы полезны"]
prices = ["цена", "стоимость", "сколько", "расценки", "прайс", "цены"]
farewells = ["пока", "до свидания", "всего хорошего", "увидимся", "было приятно", "до встречи"]
about = ["расскажите о компании", "что вы представляете", "кто вы такие", "о компании", "информация о вас"]
crm = ["crm", "система", "ата", "атабейс", "atabace", "atabase", "атабейс система", "что такое atabase"]

# Функция проверки по ключевым словам
def contains(command, keywords):
    return any(word in command for word in keywords)

# Обработка команды
def process_command(command):
    if contains(command, greetings):
        speak("Здравствуйте! Я голосовой помощник AtaBase. Хотите узнать, как мы можем автоматизировать ваш бизнес?")
    elif contains(command, services) or contains(command, crm):
        speak("AtaBase — это умная CRM-система, которая помогает вам не терять клиентов, следить за финансами, управлять сотрудниками и контролировать задачи. Всё в одном удобном интерфейсе. Мы особенно полезны салонам, клиникам, кафе и офисам.")
    elif contains(command, prices):
        speak("У нас 4 тарифа. Базовый — бесплатный. Тариф 'Стандарт' — от 5000 сом в месяц. Есть и 'Pro' с WhatsApp и Telegram, и 'Premium' с аналитикой и API. Помогу подобрать подходящий вариант.")
    elif contains(command, about):
        speak("AtaBase — это совместная разработка DevDesign и Genesis Hub. Мы создаём локальные IT-решения для кыргызского бизнеса. Наша цель — чтобы любой бизнес, от салона до логистики, мог управляться просто и эффективно.")
    elif "зачем" in command or "чем полезна" in command or "зачем нужна" in command:
        speak("AtaBase нужна, чтобы навести порядок в бизнесе. Она показывает, кто ваш клиент, кто что делает, куда уходят деньги и какие сотрудники приносят результат. С нами вы забудете про таблицы, тетради и бардак в WhatsApp.")
    elif contains(command, farewells):
        speak("До свидания! Если захотите автоматизировать бизнес — просто скажите 'AtaBase'.")
    elif "хуйня" in command:
      speak("Сам ты хуйня, за базар ответишь?")
    elif "еблан" in command:
      speak("Иди нахуй")
    elif "в рот брал" in command:
      speak("А Нурика я в очко ебал")
    else:
        speak("Извините, я пока не знаю, как на это ответить. Попробуйте задать вопрос иначе.")
    return True

# Основной цикл
def main():
    speak("Голосовой помощник AtaBase запущен. Можете говорить.")
    while True:
        command = listen()
        if command:
            if not process_command(command):
                break

if __name__ == "__main__":
    main()