from translationCode import translation

# Update the following variables with the output of image part
text = u'Today we are going to work hard all night long'
target = 'lt'


#the code
tr = translation.Translation()
tr.translate(text,target)

