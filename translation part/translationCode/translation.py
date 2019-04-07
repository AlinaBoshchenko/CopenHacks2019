# Copenhacks
from google.cloud import translate
import os

translate_client = translate.Client()
class Translation(object):
    def translate(self, word, language):
        text = '' + word + ''
        target = '' + language + ''
        translation = translate_client.translate(
            text,
            target_language=target)   
        print(u'Text: {}'.format(text))
        print(u'Translation: {}'.format(translation['translatedText']))        
        return translation
