'use strict'

import $ from 'jquery'

export default class InputDataDirty {
    static init(options) {
        options = Object.assign({}, {
            controlAll: false
        }, options)

        let elements = options.controlAll ? InputDataDirty.collect() : InputDataDirty.collectAll()

        elements.each(function(){
            InputDataDirty.bind($(this));
            InputDataDirty.setIsDirty($(this))
        });
    }

    static collect() {
        return $('input[data-dirty]').add('select[data-dirty]').add('textarea[data-dirty]')
    }

    static collectAll() {
        return $('input').add('select').add('textarea')
    }

    static bind(element) {
        let events = ['input', 'paste', 'cut', 'drop', 'change', 'focusout']

        events = events.map(event => {
            return event + '.data-dirty'
        })

        element
            .off(events.join(' '))
            .on(events.join(' '), function(){
                InputDataDirty.setIsDirty($(this))
            })
    }

    static setIsDirty(element) {
        setTimeout(function(){
            let isDirty = element.val().length > 0

            element.attr('data-dirty', isDirty)
        }, 10);
    }
}