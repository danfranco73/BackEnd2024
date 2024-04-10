// creo el manager para el chat simple en tiempo real

import {messageModel} from "./models/messageModel.js";

class ChatManagerDb {
    constructor() {
        this.messages = [];
    }

    async getMessages() {
        return await messageModel.find();
    }

    async addMessage(message) {
        const newMessage = new messageModel(message);
        return await newMessage.save();
    }
}

export default ChatManagerDb;
