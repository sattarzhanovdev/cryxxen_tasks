from flask import Flask, request
import requests
import json

app = Flask(__name__)

# Настройки
API_TOKEN = "ngeCSTyUjHu333BWOJm9ZIWq1XXC7qWa"  # Получите в Whapi.Cloud
API_URL = "https://api.whapi.cloud/messages/text"
WEBHOOK_URL = "ВАШ_СЕРВЕР_URL/webhook"

# Обработка входящих сообщений
@app.route('/webhook', methods=['POST'])
def webhook():
    data = request.get_json()
    if 'messages' in data:
        for message in data['messages']:
            sender = message['from']
            text = message['body'].lower()
            
            # Логика ответов
            if text == 'привет':
                reply = 'Здравствуйте! Чем могу помочь?'
            elif text == 'цена':
                reply = 'Цены на услуги: от 1000 руб. Хотите подробности?'
            elif text == 'заказ':
                reply = 'Для оформления заказа укажите детали.'
            else:
                reply = 'Простите, я не понял. Напишите "привет", "цена" или "заказ".'
            
            # Отправка ответа
            send_message(sender, reply)
    return 'OK', 200

# Функция отправки сообщений
def send_message(recipient, text):
    headers = {
        'Authorization': f'Bearer {API_TOKEN}',
        'Content-Type': 'application/json'
    }
    payload = {
        'to': recipient,
        'body': text
    }
    response = requests.post(API_URL, headers=headers, json=payload)
    return response.json()

# Запуск сервера
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)